
// __tests__/fetch.test.js
import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Characters from '../components/Characters'

// mock test for the server
const server = setupServer(
  rest.get('http://localhost:3000', (req, res, ctx) => {
    return res(ctx.json([{
      "name": "Luke Skywalker",
      "height": "172",
      "id": 1
    }]))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('loads and displays page title', async () => {
  render(
    <Router>
      <Characters />
    </Router>)

  await waitFor(() => screen.getByTestId('test-characters'))

  expect(screen.getByTestId('test-characters')).toHaveTextContent('Star Wars Catalog')
})