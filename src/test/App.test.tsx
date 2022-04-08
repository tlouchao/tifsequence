import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'

test('render component', () => {
  render(<App />)
  const elem = screen.getByText(/I am a sidebar!/i)
  expect(elem).toBeInTheDocument()
});
