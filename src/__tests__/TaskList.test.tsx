import React from 'react';
import { render } from '@testing-library/react';
import TaskList from '../components/TaskList';

test('renders task list', () => {
  const tasks = [{ id: 1, title: 'Task 1' }, { id: 2, title: 'Task 2' }];
  const { getByText } = render(<TaskList tasks={tasks} />);
  expect(getByText('Task 1')).toBeInTheDocument();
  expect(getByText('Task 2')).toBeInTheDocument();
});