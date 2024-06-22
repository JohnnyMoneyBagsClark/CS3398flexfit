// workoutPage.js

import React, { useState } from 'react';
import Header from './header'; // Assuming Header.js is in the same directory
import '../styles/header.css'; // Import header styles
import '../styles/workoutPage.css'; // Import specific styles for WorkoutPage
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const WorkoutPage = () => {
  const [notes, setNotes] = useState('');
  const [checklist, setChecklist] = useState([]);
  const [checklistItem, setChecklistItem] = useState('');
  const [template, setTemplate] = useState('blank');
  const [showOverlay, setShowOverlay] = useState(false);
  const [showWorkoutOverlay, setShowWorkoutOverlay] = useState(false);
  const [savedWorkouts, setSavedWorkouts] = useState([]);
  const [workoutName, setWorkoutName] = useState('');
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddChecklistItem = () => {
    if (checklistItem.trim()) {
      setChecklist([...checklist, checklistItem]);
      setChecklistItem('');
    }
  };

  const handleSave = () => {
    const workout = {
      name: workoutName,
      notes: notes,
      checklist: checklist,
    };
    if (isEditing) {
      const updatedWorkouts = savedWorkouts.map((w) =>
        w.name === workout.name ? workout : w
      );
      setSavedWorkouts(updatedWorkouts);
      localStorage.setItem('workouts', JSON.stringify(updatedWorkouts));
    } else {
      setSavedWorkouts([...savedWorkouts, workout]);
      localStorage.setItem('workouts', JSON.stringify([...savedWorkouts, workout]));
    }
    setShowOverlay(false);
    setNotes('');
    setChecklist([]);
    setWorkoutName('');
    setIsEditing(false);
    alert('Workout saved!');
  };

  const handleTemplateChange = (event) => {
    setTemplate(event.target.value);
    // Load template if needed
    if (event.target.value === 'templated') {
      setNotes('Template: Warm-up, Workout, Cool-down');
      setChecklist(['Warm-up', 'Main Workout', 'Cool-down']);
    } else if (event.target.value === 'checklist') {
      setNotes('');
      setChecklist(['Push-ups', 'Squats', 'Lunges']);
    } else {
      setNotes('');
      setChecklist([]);
    }
  };

  const handleWorkoutClick = (workout) => {
    setSelectedWorkout(workout);
    setShowWorkoutOverlay(true);
  };

  const handleDelete = (workoutName) => {
    const updatedWorkouts = savedWorkouts.filter((w) => w.name !== workoutName);
    setSavedWorkouts(updatedWorkouts);
    localStorage.setItem('workouts', JSON.stringify(updatedWorkouts));
  };

  const handleEdit = (workout) => {
    setWorkoutName(workout.name);
    setNotes(workout.notes);
    setChecklist(workout.checklist);
    setIsEditing(true);
    setShowOverlay(true);
  };

  return (
    <div className="workout-container">
      <Header /> {/* Include Header component */}
      <div className="workout-content">
        <div className="left-menu">
          <button onClick={() => { setTemplate('blank'); setShowOverlay(true); }}>Blank Workout Sheet</button>
          <button onClick={() => { setTemplate('templated'); setShowOverlay(true); }}>Templated Workout Sheet</button>
          <button onClick={() => { setTemplate('checklist'); setShowOverlay(true); }}>Workout Checklist</button>
        </div>

        <div className="workout-list">
          <h3>Saved Workouts</h3>
          <ul>
            {savedWorkouts.map((workout, index) => (
              <li key={index}>
                <button onClick={() => handleWorkoutClick(workout)}>{workout.name}</button>
                <div className="workout-actions">
                  <button onClick={() => handleEdit(workout)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button onClick={() => handleDelete(workout.name)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {showOverlay && (
          <div className="overlay">
            <div className="overlay-content">
              <h2>Workout Log</h2>
              <input
                type="text"
                value={workoutName}
                onChange={(e) => setWorkoutName(e.target.value)}
                placeholder="Workout Name"
              />
              <div className="workout-menu">
                <label>
                  Choose Template:
                  <select value={template} onChange={handleTemplateChange}>
                    <option value="blank">Blank Workout Sheet</option>
                    <option value="templated">Templated Workout Sheet</option>
                    <option value="checklist">Workout Checklist</option>
                  </select>
                </label>
              </div>

              <div className="workout-section">
                <h3>Workout Notes</h3>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Write your workout notes here..."
                />
              </div>

              <div className="workout-section">
                <h3>Workout Checklist</h3>
                <ul>
                  {checklist.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <input
                  type="text"
                  value={checklistItem}
                  onChange={(e) => setChecklistItem(e.target.value)}
                  placeholder="Add a checklist item..."
                />
                <button onClick={handleAddChecklistItem}>Add Item</button>
              </div>

              <button className="save-button" onClick={handleSave}>Save Workout</button>
              <button className="cancel-button" onClick={() => { setShowOverlay(false); setIsEditing(false); }}>Cancel</button>
            </div>
          </div>
        )}

        {showWorkoutOverlay && selectedWorkout && (
          <div className="overlay">
            <div className="overlay-content">
              <h2>{selectedWorkout.name}</h2>
              <div className="workout-section">
                <h3>Workout Notes</h3>
                <p>{selectedWorkout.notes}</p>
              </div>
              <div className="workout-section">
                <h3>Workout Checklist</h3>
                <ul>
                  {selectedWorkout.checklist.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <button className="cancel-button" onClick={() => setShowWorkoutOverlay(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkoutPage;
