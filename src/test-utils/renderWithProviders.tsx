import { PropsWithChildren } from 'react';
import { render, RenderOptions } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { createTestStore } from './store';
import type { RootState } from '@/store/rootReducer';

type Options = RenderOptions & {
  preloadedState?: Partial<RootState>;
};

/**
 * Renders a component wrapped in all required app providers.
 * Returns the store alongside the standard RNTL queries so tests
 * can inspect or dispatch against state after rendering.
 *
 * Note: SafeAreaView renders as a plain View in jest-expo's environment,
 * so SafeAreaProvider is not needed here.
 *
 * @example
 * const { store } = renderWithProviders(<MyScreen />);
 * const { store } = renderWithProviders(<MyScreen />, { preloadedState: { app: { currentMode: 'day' } } });
 */
export function renderWithProviders(
  ui: React.ReactElement,
  { preloadedState, ...renderOptions }: Options = {},
) {
  const store = createTestStore(preloadedState);

  function Wrapper({ children }: PropsWithChildren) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
