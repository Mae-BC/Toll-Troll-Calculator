import express from 'express'
import { JwtRequest } from '../auth0.js'
import checkJwt from '../auth0.js'
import * as db from '../db/registerTroll.js'

const router = express.Router()

router.get('/', checkJwt, async (req: JwtRequest, res) => {
  try {
    const auth0Id = req.auth?.sub as string
    const troll = await db.getTrollById(auth0Id)

    res.json({ troll })
  } catch (err) {
    console.error(err)
    res.status(500).send('ruh roh raggy')
  }
})

router.post('/', checkJwt, async (req: JwtRequest, res) => {
  try {
    const auth0Id = req.auth?.sub as string
    if (auth0Id === null) {
      res.status(403).send('ruh roh raggy, auth is null.')
    }
    const [troll] = await db.addTroll(auth0Id)

    res.json({ troll })
  } catch (err) {
    console.error(err)
    res.status(500).send('ruh roh raggy')
  }
})

export default router
