import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import NotificationService from './NotificationService';

const TaskInputForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) {
      NotificationService.notify('Task title is required.');
      return;
    }

    const { data, error } = await supabase
      .from('tasks')
      .insert([{ title, description }]);

    if (error) {
      NotificationService.notify('Error adding task.');
    } else {
      NotificationService.notify('Task added successfully!');
      onTaskAdded(data[0]);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInputForm;