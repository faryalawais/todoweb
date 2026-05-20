import React from 'react';
import TaskInputForm from './components/TaskInputForm';
import TaskList from './components/TaskList';

const App = () => {
  const handleTaskAdded = (newTask) => {
    // Logic to update task list if needed
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskInputForm onTaskAdded={handleTaskAdded} />
      <TaskList />
    </div>
  );
};

export default App;