import connection from './connection.ts'
import { ActiveBridge, Bridge, Revenue, newToll } from '../../models/bridge.ts'

const db = connection

export async function getBridges(): Promise<Bridge[]> {
  return db('bridges').select('*')
}

export async function getTrollsActiveBridge(id: number): Promise<ActiveBridge> {
  return db('Bridges')
    .select('*')
    .join('Trolls', 'Trolls.activebridge', 'Bridges.id')
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

export async function addToll(newTollData: newToll) {
  await db('TollAnalytics').insert(newTollData)
}
//TOoanalytics might be wrong - promise? ?
