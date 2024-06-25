//src/server.js

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const faunadb = require('faunadb');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware for handling CORS
app.use(cors({
  origin: 'http://localhost:3000', // Adjust this to match your frontend domain
  credentials: true // Required to allow credentials (cookies, authorization headers)
}));

// Middleware for parsing JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize FaunaDB client
const client = new faunadb.Client({ secret: process.env.FAUNADB_LOGIN_SECRET });
const q = faunadb.query;

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

// Routes
app.use('/api/users', userRoutes);

// Error handling middleware (must be defined last)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
