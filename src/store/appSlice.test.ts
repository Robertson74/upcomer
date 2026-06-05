import { createTestStore } from '@/test-utils/store';
import { setMode } from './appSlice';

describe('appSlice', () => {
  describe('initial state', () => {
    it('defaults to upcomer mode', () => {
      const store = createTestStore();
      expect(store.getState().app.currentMode).toBe('upcomer');
    });
  });

  describe('setMode', () => {
    it('switches to day mode', () => {
      const store = createTestStore();
      store.dispatch(setMode('day'));
      expect(store.getState().app.currentMode).toBe('day');
    });

    it('switches back to upcomer mode from day mode', () => {
      const store = createTestStore({ app: { currentMode: 'day' } });
      store.dispatch(setMode('upcomer'));
      expect(store.getState().app.currentMode).toBe('upcomer');
    });
  });
});
