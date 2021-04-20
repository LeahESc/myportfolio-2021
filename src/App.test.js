import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home.js', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
