import { describe, it, expect, vi } from 'vitest';
import NotificationService from '../services/NotificationService';

describe('NotificationService', () => {
  it('shows notification message', () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    NotificationService.show('Test Message');
    expect(alertSpy).toHaveBeenCalledWith('Test Message');
    alertSpy.mockRestore();
  });
});