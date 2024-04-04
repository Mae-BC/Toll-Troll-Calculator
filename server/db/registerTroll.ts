import connection from "./connection.js"

export const getTrollById = async (auth0Id: string, db = connection) => {
  return db('Trolls')
    .select('auth0Id')
    .where({ auth0Id })
    .first()
}

export const addTroll = async (auth0Id: string, db = connection) => {
  return db('Trolls')
    .insert({ auth0Id })
    .returning('auth0Id')
}