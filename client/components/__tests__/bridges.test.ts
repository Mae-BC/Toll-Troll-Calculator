import * as db from '../../../server/db/connection'
import connection from '../../../server/db/connection'
import { getBridges } from '../../../server/db/bridges'
// import { renderRoute } from '../../test/setup.tsx'

import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

describe('getBridges', () => {
  it('should show all bridges', async () => {
    console.log(db)
    const allBridges = await getBridges()
    expect(allBridges).toHaveLength(13)
  })
})

afterAll(() => {
  return connection.destroy()
})
