import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders star wars heading', () => {
  render(<App />)
  const linkElement = screen.getByText('Star Wars')
  expect(linkElement).toBeInTheDocument()
})
