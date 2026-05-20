import React, { useState, useEffect } from 'react';
import TaskInputForm from '../components/TaskInputForm';
import TaskList from '../components/TaskList';
import { supabase } from '../supabaseClient';

const AddTaskPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const { data } = await supabase.from('tasks').select('*');
    setTasks(data);
  };

  const handleTaskAdded = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div>
      <h1>Add Task</h1>
      <TaskInputForm onTaskAdded={handleTaskAdded} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default AddTaskPage;