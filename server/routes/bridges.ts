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

export default router
