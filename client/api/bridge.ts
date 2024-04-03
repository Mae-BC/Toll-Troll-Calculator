import request from 'superagent'
import {
  AnalyticRequest,
  Bridge,
  Revenue,
  NewToll,
} from '../../models/bridge.ts'

const bridgeURL = '/api/v1/bridges'

export async function getBridges(): Promise<Bridge[]> {
  const res = await request.get(bridgeURL)
  return res.body
}

export async function getBridgeById(id: number): Promise<Bridge> {
  const res = await request.get(`${bridgeURL}/${id}`)
  return res.body
}

export async function getActiveBridgeForUser(id: number): Promise<Bridge> {
  const res = await request.get(`${bridgeURL}/activebridge/${id}`)
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
