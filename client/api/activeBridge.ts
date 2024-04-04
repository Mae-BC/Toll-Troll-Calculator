import request from "superagent";

const rootUrl = '/api/v1'

export const addTrollToBridge = async (data: {id: number, auth0Id: string}) => {
  await request.patch(`${rootUrl}/activeBridgeUpdate/ForBridge/${data.id}`).send(data)
}

export const addBridgeToTroll = async (data: {id: number, auth0Id: string}) => {
  await request.patch(`${rootUrl}/activeBridgeUpdate/ForTroll/${data.id}`).send(data)
}