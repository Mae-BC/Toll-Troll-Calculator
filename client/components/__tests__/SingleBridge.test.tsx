// //@vitest-environment jsdom

// import { it, expect } from 'vitest'
// import { renderRoute } from '../../test/setup.tsx'
// import nock from 'nock'

// nock.disableNetConnect()

// const mockBridgeData = {
//   id: 1,
//   name: 'Mock Bridge',
//   location: 'Mock Location',
//   type: 'Mock Type',
//   yearBuilt: 3000,
//   lengthMeters: 100,
//   lanes: 2,
//   addedByUser: 'Mock User',
// }

// it('renders loading state initially', async () => {
//   const scope = nock('http://localhost')
//     .get(`/api/v1/bridges/1`)
//     .reply(200, mockBridgeData)

//   const { ...screen } = renderRoute('/1')

//   const loading = await screen.findByText(/loading/i)

//   expect(loading).toBeVisible()
// })

// it('should show the bridge has an ID', async () => {
//   const scope = nock('http://localhost')
//     .get(`/api/v1/bridges/1`)
//     .reply(200, mockBridgeData)

//   const { ...screen } = renderRoute('/14')

//   const name = await screen.findByText(/ID/i)

//   expect(name).toBeVisible()
// })
