//@vitest-environment jsdom

import { beforeEach, it, expect } from 'vitest'
import { renderRoute } from '../../test/setup.tsx'
import { render } from 'react-dom'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import SingleBridge from './SingleBridge'
import nock from 'nock'
import {
  waitFor,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react/pure'

nock.disableNetConnect()

const mockBridgeData = {
  id: 1,
  name: 'Mock Bridge',
  location: 'Mock Location',
  type: 'Mock Type',
  yearBuilt: 3000,
  lengthMeters: 100,
  lanes: 2,
  addedByUser: 'Mock User',
}

it('renders loading state initially', async () => {
  const scope = nock('http://localhost')
    .get(`/api/v1/bridges/1`)
    .reply(200, mockBridgeData)

  // Act
  const { ...screen } = renderRoute('/1')

  // Assert
  // const loading = await waitFor(() => screen.getByLabelText(/loading/i))
  const loading = await screen.findByText(/loading/i)

  expect(loading).toBeVisible()
})
