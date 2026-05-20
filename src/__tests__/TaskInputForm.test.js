import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import TaskInputForm from '../components/TaskInputForm';
import NotificationService from '../services/NotificationService';

vi.mock('../services/NotificationService');

describe('TaskInputForm', () => {
  it('should add a new task with valid title and description', async () => {
    const onTaskAdded = vi.fn();
    const { getByPlaceholderText, getByText } = render(<TaskInputForm onTaskAdded={onTaskAdded} />);

    fireEvent.change(getByPlaceholderText('Task Title'), { target: { value: 'New Task' } });
    fireEvent.change(getByPlaceholderText('Task Description'), { target: { value: 'Task Description' } });
    fireEvent.click(getByText('Add Task'));

    expect(NotificationService.notify).toHaveBeenCalledWith('Task added successfully!');
    expect(onTaskAdded).toHaveBeenCalled();
  });

  it('should not add a task without a title', async () => {
    const onTaskAdded = vi.fn();
    const { getByText } = render(<TaskInputForm onTaskAdded={onTaskAdded} />);

    fireEvent.click(getByText('Add Task'));

    expect(NotificationService.notify).toHaveBeenCalledWith('Task title is required.');
    expect(onTaskAdded).not.toHaveBeenCalled();
  });
});