//userRoutes.js

const express = require('express');
const bcrypt = require('bcrypt');
const faunadb = require('faunadb');
const jwt = require('jsonwebtoken');
const router = express.Router();

const client = new faunadb.Client({ secret: process.env.FAUNADB_LOGIN_SECRET });
const q = faunadb.query;

const saltRounds = 10;

// Verify if the index exists, if not, create it
const createIndex = async () => {
    try {
        const indexExists = await client.query(q.Exists(q.Index('users_by_email')));
        if (!indexExists) {
            await client.query(
                q.CreateIndex({
                    name: 'users_by_email',
                    source: q.Collection('users'),
                    terms: [{ field: ['data', 'email'] }],
                })
            );
            console.log('Index created successfully');
        } else {
            console.log('Index already exists');
        }
    } catch (error) {
        console.error('Error creating index:', error);
    }
};

createIndex();

// Signup route
router.post('/signup', async (req, res) => {
    const { fullName, email, username, password } = req.body;

    if (!email || !password || !fullName || !username) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    try {
        const userExists = await client.query(q.Exists(q.Match(q.Index('users_by_email'), email)));

        if (userExists) {
            return res.status(409).json({ success: false, message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = await client.query(q.Create(q.Collection('users'), {
            data: { fullName, email, username, password: hashedPassword },
        }));

        res.status(201).json({ success: true, message: 'User created successfully', userId: user.ref.id });

    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Email and password are required' });
    }

    try {
        // Retrieve the user from the database
        const user = await client.query(q.Get(q.Match(q.Index('users_by_email'), email)));

        // Check if user exists and password is correct
        if (!user || !(await bcrypt.compare(password, user.data.password))) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }

        // Generate a JWT for the user
        const token = jwt.sign(
            { userId: user.ref.id, email: user.data.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Respond with the JWT token
        res.json({ success: true, message: 'Logged in successfully', token });

    } catch (error) {
        console.error('Login error:', error);

        // Check specific error to provide more detailed feedback
        if (error.requestResult.statusCode === 404) {
            return res.status(401).json({ success: false, message: 'User not found or incorrect credentials' });
        }

        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

module.exports = router;
