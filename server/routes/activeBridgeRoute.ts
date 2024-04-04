import express from 'express'
import * as db from '../db/activeBridge.ts'

const router = express.Router()
export default router

router.patch('/ForBridge/:id', async (req, res) => {
  const id = Number(req.params.id)
  const { auth0Id } = req.body
  try {
      await db.getBridgeByIdAndAddTroll(id, auth0Id)
      res.sendStatus(200)
  } catch (err) {
      console.error(`Oops: ${err}`)
      res.sendStatus(500)
  }
})

router.patch('/ForTroll/:id', async (req, res) => {
  const bridgeId = req.params.id
  const { auth0Id } = req.body
  console.log('😂', bridgeId, auth0Id)
  try {
      await db.getTrollByAuthAndAddBridge(Number(bridgeId), auth0Id)
      res.sendStatus(200)
  } catch (err) {
      console.error(`Oops: ${err}`)
      res.sendStatus(500)
  }
})