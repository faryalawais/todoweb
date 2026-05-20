import { describe, it, expect, vi } from 'vitest';
import NotificationService from '../services/NotificationService';

describe('NotificationService', () => {
  it('should call alert with the correct message', () => {
    const message = 'Test Notification';
    window.alert = vi.fn();
    NotificationService.notify(message);
    expect(window.alert).toHaveBeenCalledWith(message);
  });
});