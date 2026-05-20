import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import AddTaskPage from '../pages/AddTaskPage';

describe('AddTaskPage', () => {
  it('renders AddTaskPage correctly', () => {
    const { getByText } = render(<AddTaskPage />);
    expect(getByText('Add New Task')).toBeInTheDocument();
  });
});