import request from "superagent"

const rootUrl = '/api/v1'

export const getTroll = async ({ token }: { token: string }) => {
  return await request
    .get(`${rootUrl}/troll`)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => (res.body.troll ? res.body.troll : null))
}

export const addTroll = async ({ newTroll, token }: { newTroll: string, token: string }) => {
  return request
    .post(`${rootUrl}/troll`)
    .set('Authorization', `Bearer ${token}`)
    .send({ newTroll })
    .then((res) => res.body.preferences)
}