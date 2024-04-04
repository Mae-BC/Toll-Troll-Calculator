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

router.post('/fav', async (req, res) => {
  const bridgeid = parseInt(req.body.data.bridgeid)
  const trollid = req.body.data.trollid

  try {
    const favStatus = await db.isFav(bridgeid, trollid)
    if (favStatus) {
      await db.deleteFavBridge(bridgeid, trollid)
      res.json({ message: 'deleted favourites' })
    } else {
      await db.saveFavBridge(bridgeid, trollid)
      res.json({ message: 'saved favourites' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('shits fucked')
  }
})

router.get('/fav/:trollid', async (req, res) => {
  const trollid = req.params.trollid
  try {
    const savedBridges = await db.getSavedBridges(trollid)
    res.json(savedBridges)
  } catch (error) {
    console.error(error)
    res.status(500).send('Error fetching saved bridges')
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
