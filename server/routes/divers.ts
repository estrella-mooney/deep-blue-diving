import express from 'express'
import {
  addDiver,
  delDiver,
  getAllDivers,
  getDiver,
  updateDiver,
} from '../db/diversdb'

const router = express.Router()

router.get('/', (req, res) => {
  getAllDivers()
    .then((divers) => res.json(divers))
    .catch((err) => res.status(500).json({ status: 500, error: err.message }))
})

router.get('/:id', (req, res) => {
  getDiver(Number(req.params.id))
    .then((diver) => res.json(diver))
    .catch((err) => res.status(500).json({ status: 500, error: err.message }))
})

router.post('/', (req, res) => {
  addDiver(req.body)
    .then((diver) => res.json(diver))
    .catch((err) => res.status(500).json({ status: 500, error: err.message }))
})

router.patch('/:id', (req, res) => {
  updateDiver(req.body)
    .then((diver) => res.json(diver))
    .catch((err) => res.status(500).json({ status: 500, error: err.message }))
})

router.delete('/:id', (req, res) => {
  delDiver(Number(req.params.id))
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(500).json({ status: 500, error: err.message }))
})

export default router
