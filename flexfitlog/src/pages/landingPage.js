// LandingPage.js

import React from 'react';
import Header from './header'; // Assuming Header.js is in the same directory
import '../styles/header.css'; // Import header styles
import '../styles/landingPage.css'; // Import landing page specific styles

const LandingPage = () => {
  return (
    <div className="landing-container">
      <Header />
      <div className="landing-content">
        <h1>Flex Fit</h1>
        <section>
          <h2>System Overview</h2>
          <p>
            Flex Fit is a web application designed using the REACT framework for the front-end. For the back-end login logic, it uses Express.js, and the data is handled using the Fauna database. The application allows users to sign up and create an account. Once in the application, users have the ability to upload and share notes or checklists with their friends. An additional game aspect will be provided when completing tasks in a checklist. Flex Fit will include a social media component, enabling users to connect with friends, view their posts, and interact with them.
          </p>
        </section>
        <section>
          <h2>Definitions, Acronyms and Abbreviations</h2>
          <ul>
            <li><strong>SRS:</strong> Software Requirements Specification</li>
            <li><strong>REACT js:</strong> A JavaScript library for building user interfaces</li>
            <li><strong>Express.js:</strong> A web application framework for Node.js</li>
            <li><strong>Fauna db:</strong> A flexible, developer-friendly, and serverless database</li>
            <li><strong>UI:</strong> User Interface</li>
            <li><strong>API:</strong> Application Programming Interface</li>
            <li><strong>CRUD:</strong> create, retrieve, update, delete</li>
          </ul>
        </section>
        <section>
          <h2>Supporting Materials</h2>
          <ul>
            <li><a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">React Documentation</a></li>
            <li><a href="https://expressjs.com/en/starter/installing.html" target="_blank" rel="noopener noreferrer">Express.js Documentation</a></li>
            <li><a href="https://docs.fauna.com/fauna/current/" target="_blank" rel="noopener noreferrer">Fauna Documentation</a></li>
            <li>IEEE Std 830-1998, IEEE Recommended Practice for Software Design Description</li>
          </ul>
        </section>
        <section>
          <h2>Document Overview</h2>
          <p>
            This Software Design Document is structured to facilitate a comprehensive understanding of the Flex Fit Workout Log application's design and architecture:
          </p>
          <ul>
            <li><strong>Section 1 (Introduction):</strong> Provides an overview of the document's purpose, the intended audience, and a high-level description of the Flex Fit application. This section sets the stage for the detailed architectural discussions that follow.</li>
            <li><strong>Section 2 (System Overview):</strong> Details the architectural framework and technical stack employed by Flex Fit, including the use of REACT, Express.js, and Fauna db. It explains the application's core functionality from user registration to social interaction.</li>
            <li><strong>Section 3 (Definitions, Acronyms, and Abbreviations):</strong> Clarifies key terms and acronyms used throughout the document to ensure a uniform understanding among all stakeholders.</li>
            <li><strong>Section 4 (Supporting Materials):</strong> Lists and provides references to all external documents and resources that support the design and architecture described in this SDD, including React, Express.js, and Fauna documentation, as well as relevant IEEE standards.</li>
          </ul>
        </section>
        <section>
          <h2>Architecture Overview</h2>
          <p>
            The architecture of the Flex Fit Workout Log application is designed to be modular, scalable, and efficient. The system is decomposed into several key components, each responsible for a specific aspect of the application's functionality. The primary components include the client-side application built with React, the server-side application using Express.js, and the Fauna database for data storage. This architecture ensures a clear separation of concerns, facilitating easier maintenance and scalability.
          </p>
          <h3>Component Descriptions</h3>
          <section>
            <h4>React Client</h4>
            <p>
              The React Client is the frontend part of the Flex Fit Workout Log application. It is responsible for rendering the user interface and handling user interactions.
            </p>
            <ul>
              <li><strong>UI Components:</strong> These are the visual elements of the application, such as forms, buttons, and workout logs.</li>
              <li><strong>Responsibilities:</strong> Render data fetched from the server, capture user input, and trigger actions based on user interactions.</li>
              <li><strong>Interactions:</strong> Communicate with the API Endpoints on the Express Server to fetch and send data.</li>
            </ul>
            <p>
              <strong>State Management:</strong> Manages the state of the application using libraries like Redux or Context API.
            </p>
            <ul>
              <li><strong>Responsibilities:</strong> Ensure data consistency across UI Components, manage global state (e.g., user session, workout data).</li>
              <li><strong>Interactions:</strong> Synchronizes state with the server by making API calls to the API Endpoints.</li>
            </ul>
          </section>
          <section>
            <h4>Express Server</h4>
            <p>
              The Express Server handles the backend logic of the application. It processes client requests, performs business logic, and interacts with the database.
            </p>
            <ul>
              <li><strong>API Endpoints:</strong> RESTful routes that handle HTTP requests from the React Client.</li>
              <li><strong>Responsibilities:</strong> Receive requests, pass data to the appropriate business logic or authentication handlers, and send responses back to the client.</li>
              <li><strong>Interactions:</strong> Interact with Business Logic and Authentication to process requests.</li>
            </ul>
            <p>
              <strong>Business Logic:</strong> Contains the core functionality and rules of the application.
            </p>
          </section>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;


