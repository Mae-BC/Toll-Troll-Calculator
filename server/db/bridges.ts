import connection from './connection.ts'
import { Bridge } from '../../models/bridge.ts'

const db = connection

export async function getBridges(db = connection): Promise<Bridge[]> {
  return db('bridges').select('*')
}

export async function saveFavBridge(bridgeid: number, trollid: number) {
  return db('FavouriteBridgesJunction').insert({ bridgeid, trollid })
}
