import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the standard for reactjs text', () => {
  render(<App />);
  const linkElement = screen.getByText(/The Standard for ReactJS/i);
  expect(linkElement).toBeInTheDocument();
});
