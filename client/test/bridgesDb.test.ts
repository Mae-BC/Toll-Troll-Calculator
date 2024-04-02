import * as db from '../../server/db/connection'
import connection from '../../server/db/connection'
import { getBridges } from '../../server/db/bridges'

import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

describe('getBridges', () => {
  it('should show all bridges', async () => {
    const bridges = await db.getBridges()
    expect(bridges).toHaveLength(13)
  })
})

afterAll(() => {
  return connection.destroy()
})
