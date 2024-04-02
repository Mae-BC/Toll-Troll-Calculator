import connection from '../connection'
import { getBridges, getBridgeById } from '../bridges'

import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(async () => {
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
    const id = 14
    const singleBridge = await getBridgeById(id)
    expect(singleBridge.id).toBe(14)
    expect(singleBridge.name).toBe('Auckland Harbour Bridge')
  })
})

afterAll(() => {
  return connection.destroy()
})
