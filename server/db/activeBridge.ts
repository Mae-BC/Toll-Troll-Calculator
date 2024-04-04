import connection from './connection.ts'
import { Bridge } from '../../models/bridge.tsx'

const db = connection

export const getBridgeByIdAndAddTroll = async (
  id: number,
  auth0Id: string,
): Promise<Bridge> => {
  return db('bridges').where({ id }).update({ added_by_user: auth0Id })
}

export const getTrollByAuthAndAddBridge = async (
  bridgeId: number,
  auth0Id: string
) => {
  return db('trolls').where({ auth0Id }).update({
    active_bridge_id: bridgeId,
  })
}
