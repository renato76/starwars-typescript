import React from 'react'
import { render, screen } from '@testing-library/react'
import Pokemon from '../components/Characters'

// test('renders star wars heading', () => {
//   render(<Pokemon />)
//   const linkElement = screen.getByText('Star Wars')
//   expect(linkElement).toBeInTheDocument()
// })

test('Logo must have src = "https://www.freepnglogos.com/uploads/pokemon-logo-text-png-7.png" and alt = "pokemon-logo"', () => {
  render(<Pokemon/>)
  const logo = screen.getByRole('img')
  expect(logo).toHaveAttribute('src', 'https://www.freepnglogos.com/uploads/pokemon-logo-text-png-7.png')
  expect(logo).toHaveAttribute('alt')
})