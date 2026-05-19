import { render, screen } from '@testing-library/react';
import TaskList from '../components/TaskList';

test('renders task list', () => {
  const tasks = [{ id: 1, title: 'Task 1' }, { id: 2, title: 'Task 2' }];
  render(<TaskList tasks={tasks} />);

  expect(screen.getByText(/Task 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Task 2/i)).toBeInTheDocument();
});