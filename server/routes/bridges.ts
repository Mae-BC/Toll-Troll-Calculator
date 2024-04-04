import express from 'express'

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

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const bridge = await db.getBridgeById(id)
    res.json(bridge)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

// GET /api/vi/bridges/activebridge/ - For grabbing logged in trolls active bridge
router.get('/activebridge/:id', async (req, res) => {
  const id = Number(req.params.id)
  console.log('i got hit')
  console.log(id)
  try {
    const bridge = await db.getTrollsActiveBridge(id)
    console.log(bridge)
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
  try {
    const revenue = await db.getTrollsActiveBridgeRevenue(trollid, bridgeid)
    res.json(revenue)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

//post toll submissions
router.post('/toll', async (req, res) => {
  const newTollData = req.body
  try {
    await db.addToll(newTollData)
    res.status(201).send('Troll toll charged successfully')
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

export default router
