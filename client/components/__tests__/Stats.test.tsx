// @vitest-environment jsdom

import { it, expect, beforeAll, describe } from 'vitest'
import { screen } from '@testing-library/react'
import Stats from '../active_bridge/Stats.tsx'
import { renderRoute } from '../../test/setup.tsx'
import nock from 'nock'

beforeAll(() => nock.disableNetConnect())

const mockBridgeData = {
  id: 3,
  name: 'Mock Bridge',
  location: 'Mock Location',
  type: 'Mock Type',
  yearBuilt: 3000,
  lengthMeters: 100,
  lanes: 2,
  addedByUser: 'Mock User',
  auth0: '',
  activebridge: 2,
}

describe('Stats component', () => {
  it('renders bridge stats correctly', async () => {
    nock('http://localhost')
      .get('/api/v1/bridges/activebridge/3')
      .reply(200, mockBridgeData)
    renderRoute('/')

    const revenueData = { revenue: 12030 }

    nock('http://localhost')
      .get('/api/v1/bridges/analytics/3/2')
      .reply(200, revenueData)

    renderRoute('/')

    const bridgeName = await screen.findByText('Mock Bridge Stats')
    
    expect(
      await screen.findByText('1🐐', {
        exact: false,
      }),
    ).toBeVisible()

    //assert
    expect(bridgeName).toHaveTextContent('Mock Bridge')
  })
})
