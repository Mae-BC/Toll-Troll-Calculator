import connection from './connection.ts'
import { ActiveBridge, Bridge, Revenue, NewToll } from '../../models/bridge.tsx'

const db = connection

export async function getBridges(): Promise<Bridge[]> {
  return await db('bridges').select('*')
}

export async function saveFavBridge(bridgeid: number, trollid: number) {
  return await db('FavouriteBridgesJunction').insert({ bridgeid, trollid })
}

export async function deleteFavBridge(bridgeid: number, trollid: number) {
  return await db('FavouriteBridgesJunction')
    .where({ bridgeid, trollid })
    .delete()
}

export async function isFav(bridgeid: number, trollid: number) {
  const answer = await db('FavouriteBridgesJunction')
    .where({ bridgeid, trollid })
    .first()
  console.log(answer)
  return answer
}

export async function getSavedBridges(trollid: string) {
  return await db('FavouriteBridgesJunction').where({ trollid })
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
  return db('Bridges')
    .select('*')
    .join('Trolls', 'Trolls.active_bridge_id', 'bridges.id')
    .where('Trolls.id', id)
    .first()
}

export async function getTrollsActiveBridgeByAuthId(
  id: string,
): Promise<ActiveBridge> {
  return db('Bridges')
    .select('*')
    .join('Trolls', 'Trolls.activeBridge', 'Bridges.id')
    .where('Trolls.auth0Id', id)
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
