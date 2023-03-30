import express from 'express'
import { getDivesForDiver } from '../db/joindb'

const router = express.Router()

router.get('/dives-for-diver/:id', (req, res) => {
  getDivesForDiver(Number(req.params.id))
    .then((dives) => res.json(dives))
    .catch((err) => res.status(500).json({ status: 500, error: err.message }))
})

export default router
