import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const TaskInputForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleAddTask = async () => {
    if (!title) {
      setError('Task title is required.');
      return;
    }

    const { data, error: insertError } = await supabase
      .from('tasks')
      .insert([{ title, description }]);

    if (insertError) {
      if (insertError.code === '23505') {
        setError('Task title must be unique.');
      } else {
        setError('Error adding task.');
      }
    } else {
      onTaskAdded(data[0]);
      setTitle('');
      setDescription('');
      setError('');
      alert('Task added successfully!');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
      />
      <button onClick={handleAddTask}>Add Task</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default TaskInputForm;