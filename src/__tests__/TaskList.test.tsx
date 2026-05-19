import React from 'react';
import { render } from '@testing-library/react';
import TaskList from '../components/TaskList';

describe('TaskList', () => {
  it('renders tasks correctly', () => {
    const tasks = [{ id: 1, title: 'Test Task' }];
    const { getByText } = render(<TaskList tasks={tasks} />);
    expect(getByText('Test Task')).toBeInTheDocument();
  });
});