import express from 'express'
import { Bridge } from '../../models/bridge.ts'
import { JwtRequest } from '../auth0.ts'

import * as db from '../db/bridges.ts'

const router = express.Router()

// GET /api/v1/bridges
router.get('/', async (req, res) => {
  try {
    const bridges = await db.getBridges()

    res.json(bridges)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

// Get /api/vi/bridges/activebridge/ - For grabbing logged in trolls active bridge
router.get('/activebridge/:id', async (req, res) => {
  const id = Number(req.params.id)
  console.log(id)
  try {
    const bridge = await db.getTrollsActiveBridge(id)
    res.json(bridge)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

export default router
