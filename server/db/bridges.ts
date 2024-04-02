import connection from './connection.ts'
import { Bridge } from '../../models/bridge.ts'

const db = connection

export async function getBridges(): Promise<Bridge[]> {
  return db('bridges').select('*')
}

export async function getBridgeById(id: number): Promise<Bridge> {
  return db('bridges').where('id', id).first()
}
