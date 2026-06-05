import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '@/store/rootReducer';
import type { RootState } from '@/store/rootReducer';

/**
 * Creates a fresh, isolated Redux store for each test.
 * Uses the real rootReducer (stays in sync with production automatically).
 * No redux-persist wrapper — tests work with plain state.
 *
 * Imports from rootReducer.ts directly (not store/index.ts) to avoid
 * triggering persistStore, which would cause timer leaks in tests.
 *
 * The RTK Query middleware is intentionally excluded to prevent open timer
 * leaks. If you need to test RTK Query endpoints directly, add
 * `.concat(apiSlice.middleware)` to the middleware chain in that test file.
 */
export function createTestStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type TestStore = ReturnType<typeof createTestStore>;
