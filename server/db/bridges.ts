import connection from './connection.ts'
import { Bridge } from '../../models/bridge.ts'

const db = connection

export async function getBridges(): Promise<Bridge[]> {
  return db('bridges').select('*')
}

export async function getTrollsActiveBridge(id: number): Promise<Bridge> {
  return db('Bridges')
    .select('*')
    .join('Trolls', 'Trolls.active_bridge', 'Bridges.id')
    .where('Trolls.id', id)
    .first()
}
