import { render, screen } from '@testing-library/react';
import TaskList from '../components/TaskList';

describe('TaskList', () => {
  test('renders tasks correctly', () => {
    const tasks = [{ id: 1, title: 'Test Task' }];
    render(<TaskList tasks={tasks} />);
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });
});