// WorkoutPage.js

import React from 'react';
import Header from './header'; // Assuming Header.js is in the same directory
import '../styles/header.css'; // Import header styles
import '../styles/workoutPage.css'; // Import specific styles for WorkoutPage

const WorkoutPage = () => {
  // Example posts data
  const friendPosts = [
    { id: 1, content: "Friend's post 1" },
    { id: 2, content: "Friend's post 2" },
    { id: 3, content: "Friend's post 3" },
  ];

  return (
    <div className="workout-container">
      <Header /> {/* Include Header component */}
      <div className="workout-content">
        <h2>Workout Log</h2>
        <div className="friend-posts">
          <h3>Friend's Posts</h3>
          <ul>
            {friendPosts.map((post) => (
              <li key={post.id}>{post.content}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPage;
