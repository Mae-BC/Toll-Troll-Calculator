import connection from './connection.ts'
import { Bridge } from '../../models/bridge.ts'

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
