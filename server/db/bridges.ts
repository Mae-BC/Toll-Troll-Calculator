import connection from './connection.ts'
import { ActiveBridge, Bridge, Revenue, NewToll } from '../../models/bridge.tsx'

const db = connection

export async function getBridges(): Promise<Bridge[]> {
  return db('bridges').select('*')
}

export async function getBridgeById(id: number): Promise<Bridge> {
  return db('bridges')
    .where('id', id)
    .select(
      'id',
      ' name',
      ' location',
      ' type',
      ' year_built as yearBuilt',
      ' length_meters as lengthMeters',
      'added_by_user as addedByUser',
    )
    .first()
}
//NOTE 4 TYLER
export async function getTrollsActiveBridge(id: number): Promise<ActiveBridge> {
  // Note: in the test the ids of the bridges start at 14 and increase from there.
  // The troll data assumed the ids started at 1,2,3
  // seed issue reff to file notes in  0_clean.js
  const troll = await db('Trolls').select('*').where('id', id).first()
  console.log(troll.activebridge)
  const bridges = await getBridges()
  console.log(bridges)

  return db('bridges')
    .select('*')
    .join('Trolls', 'Trolls.activebridge', 'bridges.id')
    .where('Trolls.id', id)
    .first()
}

export async function getTrollsActiveBridgeRevenue(
  trollid: number,
  bridgeid: number,
): Promise<Revenue> {
  return db('TollAnalytics')
    .where({ bridgeid })
    .where('troll_id', trollid)
    .sum('revenue as revenue')
    .first()
}

export async function addToll(newTollData: NewToll) {
  await db('TollAnalytics').insert(newTollData)
}
