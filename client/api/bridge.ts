import request from 'superagent'
import { Bridge, Revenue, NewToll, BridgeSave } from '../../models/bridge.ts'

const bridgeURL = '/api/v1/bridges'

export async function saveBridge(data: BridgeSave) {
  const res = await request.post(`${bridgeURL}/fav`).send({ data })
  return res.body
}

export async function savedFav(id: string) {
  const res = await request.get(`${bridgeURL}/fav/${id}`).send({ id })
  return res.body
}

export async function getBridges(): Promise<Bridge[]> {
  const res = await request.get(bridgeURL)
  return res.body
}

export async function getBridgeById(id: number): Promise<Bridge> {
  const res = await request.get(`${bridgeURL}/${id}`)
  return res.body
}

export async function getActiveBridgeForUser(token: string): Promise<Bridge> {
  const res = await request
    .get(`${bridgeURL}/activebridge`)
    .auth(token, { type: 'bearer' })
  return res.body
}

export async function getBridgeRevenueForTroll(
  trollid: number,
  bridgeid: number,
): Promise<Revenue> {
  const res = await request.get(`${bridgeURL}/analytics/${trollid}/${bridgeid}`)
  return res.body
}

export async function submitTollAnalytic(newToll: NewToll) {
  const res = await request.post(`${bridgeURL}/toll`).send(newToll)
  return res.body
}
