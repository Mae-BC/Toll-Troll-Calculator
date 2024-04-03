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

// GET /api/vi/bridges/activebridge/ - For grabbing logged in trolls active bridge
router.get('/activebridge/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const bridge = await db.getTrollsActiveBridge(id)
    res.json(bridge)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

// GET /api/vi/bridges/analytics/ - For grabbing logged in trolls revenue on their active bridge
router.get('/analytics/:troll/:bridge', async (req, res) => {
  const trollid = Number(req.params.troll)
  const bridgeid = Number(req.params.bridge)
  console.log(trollid, bridgeid)
  try {
    const revenue = await db.getTrollsActiveBridgeRevenue(trollid, bridgeid)
    console.log(revenue)
    res.json(revenue)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

//post toll submissions
router.post('/toll', async (req, res) => {
  const newTollData = req.body
  console.log(newTollData)

  try {
    await db.addToll(newTollData)
    res.status(201).send('Troll toll charged successfully')
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

export default router
