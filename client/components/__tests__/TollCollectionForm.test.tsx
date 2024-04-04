//@vitest-environment jsdom

import { it, expect, beforeAll } from 'vitest'
import { screen } from '@testing-library/react'
import { describe } from 'node:test'
import { renderRoute } from '../../test/setup.tsx'
import nock from 'nock'

// Testing state change from user events
// Testng the submit hits the endpoint

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

describe('<TollCollectionForm />', () => {
  it('start the inputs with placeholders', async () => {
    nock('http://localhost')
      .get('/api/v1/bridges/activebridge/3')
      .reply(200, mockBridgeData)
    renderRoute('/')

    const input = await screen.findByLabelText(/Goat/)
    expect(input).toHaveTextContent('')
  })

  it('handles user submitting the toll', async () => {
    nock('http://localhost')
      .get('/api/v1/bridges/activebridge/3')
      .reply(200, mockBridgeData)
    const { user } = renderRoute('/')

    const goatInput = await screen.findByLabelText(/Number of Goats/)
    const ringInput = await screen.findByLabelText(/Number of Gold Rings/)
    const rocksInput = await screen.findByLabelText(/Number of Rock Candies/)
    expect(goatInput).toHaveTextContent('')
    await user.type(goatInput, '1')
    await user.type(ringInput, '1')
    await user.type(rocksInput, '10')

    const tollScope = nock('http://localhost')
      .post('/api/v1/bridges/toll', {
        bridgeid: 2,
        revenue: 10110,
        troll_id: 3,
      })
      .reply(201)

    const button = await screen.findByRole('button', { name: 'Charge Toll' })
    await user.click(button)
    expect(tollScope.isDone()).toBe(true)
  })
})
