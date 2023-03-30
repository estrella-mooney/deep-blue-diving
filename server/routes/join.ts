import express from 'express'
import {
  addDiverToDives,
  addDiversToDive,
  getDiversOnDive,
  getDivesForDiver,
  deleteJoins,
} from '../db/joindb'

const router = express.Router()

router.get('/dives-for-diver/:id', (req, res) => {
  getDivesForDiver(Number(req.params.id))
    .then((dives) => res.json(dives))
    .catch((err) => res.status(500).json({ status: 500, error: err.message }))
})

router.get('/divers-on-dive/:id', (req, res) => {
  getDiversOnDive(Number(req.params.id))
    .then((divers) => res.json(divers))
    .catch((err) => res.status(500).json({ status: 500, error: err.message }))
})

router.post('/dives-for-diver/:id', (req, res) => {
  addDiverToDives(Number(req.params.id), req.body)
    .then((joins) => res.json(joins))
    .catch((err) => res.status(500).json({ status: 500, error: err.message }))
})

router.post('/divers-on-dive/:id', (req, res) => {
  addDiversToDive(req.body, Number(req.params.id))
    .then((joins) => res.json(joins))
    .catch((err) => res.status(500).json({ status: 500, error: err.message }))
})

router.delete('/', (req, res) => {
  deleteJoins(req.body)
    .then((deletions) => res.json(deletions))
    .catch((err) => res.status(500).json({ status: 500, error: err.message }))
})

export default router
