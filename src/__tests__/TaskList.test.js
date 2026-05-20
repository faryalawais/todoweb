import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render } from '@testing-library/react';
import TaskList from '../components/TaskList';
import { supabase } from '../supabaseClient';

vi.mock('../supabaseClient');

describe('TaskList', () => {
  beforeEach(() => {
    supabase.from.mockReturnValue({
      select: vi.fn().mockResolvedValue({ data: [{ id: 1, title: 'Existing Task' }] })
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render tasks from the database', async () => {
    const { findByText } = render(<TaskList />);
    expect(await findByText('Existing Task')).toBeInTheDocument();
  });
});