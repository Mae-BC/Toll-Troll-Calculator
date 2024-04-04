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

export async function getTrollsActiveBridge(id: number): Promise<ActiveBridge> {
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
  const result = await db('TollAnalytics')
    .where({ bridgeid })
    .where('troll_id', trollid)
    .sum('revenue as revenue')
    .first()

  if (!result)
    throw new Error('No Revenue found for the specified troll and bridge.')

  return result
}

export async function addToll(newTollData: NewToll) {
  await db('TollAnalytics').insert(newTollData)
}
