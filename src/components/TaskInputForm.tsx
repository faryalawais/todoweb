import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import NotificationService from '../services/NotificationService';

const TaskInputForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = async () => {
    if (!title) {
      NotificationService.notify('Task title is required.');
      return;
    }

    const { data, error } = await supabase
      .from('tasks')
      .insert([{ title, description }]);

    if (error) {
      NotificationService.notify('Error adding task: ' + error.message);
    } else {
      NotificationService.notify('Task added successfully!');
      onTaskAdded(data[0]);
      setTitle('');
      setDescription('');
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
    </div>
  );
};

export default TaskInputForm;