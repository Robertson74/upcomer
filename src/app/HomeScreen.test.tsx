import { screen } from '@testing-library/react-native';
import { renderWithProviders } from '@/test-utils/renderWithProviders';
import HomeScreen from './HomeScreen';

describe('HomeScreen', () => {
  it('renders the app title', () => {
    renderWithProviders(<HomeScreen />);
    expect(screen.getByText('Upcomer')).toBeTruthy();
  });
});
