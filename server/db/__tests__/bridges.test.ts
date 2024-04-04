import connection from '../connection'
import {
  getBridges,
  getBridgeById,
  getTrollsActiveBridge,
  getTrollsActiveBridgeRevenue,
  addToll,
} from '../bridges'

import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(async () => {
  // the ids increase after each test.
  // we need to reset the id increment as well
  await connection.seed.run()
})

describe('getBridges', () => {
  it('should show all bridges', async () => {
    const allBridges = await getBridges()
    expect(allBridges).toHaveLength(13)
  })
})

describe('getBridgeById', () => {
  it('should show a single bridge by its id', async () => {
    const id = 1
    const singleBridge = await getBridgeById(id)
    expect(singleBridge.id).toBe(1)
    expect(singleBridge.name).toBe('Auckland Harbour Bridge')
  })
})

describe('getTrollsActiveBridge', () => {
  it('should give the trolls active bridge data', async () => {
    const trollId = 3
    const activeBridge = await getTrollsActiveBridge(trollId)
    // console.log(activeBridge)
    expect(activeBridge.activebridge).toBe(2)
    expect(activeBridge.name).toBe('Grafton Bridge')
  })
})

describe('getTrollsActiveBridgeRevenue', () => {
  it('should show a trolls total revenue for their active bridge', async () => {
    const trollid = 2
    const bridgeid = 2
    const revenue = await getTrollsActiveBridgeRevenue(trollid, bridgeid)
    expect(revenue.revenue).toBe(0.3)
  })
})

describe('addToll', () => {
  it('add a trolls toll receipt to the database', async () => {
    const newTollData = {
      bridgeid: 4,
      revenue: 155,
      troll_id: 3,
    }
    await addToll(newTollData)
    // Check the revenue was added to the db
    const receipt = await getTrollsActiveBridgeRevenue(3, 4)
    expect(receipt.revenue).toBe(155)
  })
})

afterAll(() => {
  return connection.destroy()
})
