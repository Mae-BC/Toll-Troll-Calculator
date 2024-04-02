import request from 'superagent'
import { Bridge, BridgeSave } from '../../models/bridge.ts'

const bridgeURL = '/api/v1/bridges'

export async function getBridges(): Promise<Bridge[]> {
  const res = await request.get(bridgeURL)
  return res.body
}

export async function saveBridge(data: BridgeSave) {
  const res = await request.post(`${bridgeURL}/fav`).send({ data })
  return res.body
}
