import express from 'express'
import { DivesInterface } from '../../common/Dives'
import {
  getAllDives,
  getIndivudualDives,
  createDives,
  updateDives,
  deleteDives,
} from '../db/divesdb'

const router = express.Router()

router.get('/', (req, res) => {
  getAllDives()
    .then((dives) => {
      res.json(dives)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const newDive = req.body
  createDives(newDive)
    .then((newDive) => res.json(newDive))
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  getIndivudualDives(id)
    .then((dives) => {
      res.json(dives)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

router.patch('/:id', (req, res) => {
  const { title, description, max_depth, duration, max_group, time } = req.body
  const updateData = {
    id: Number(req.params.id),
    title: title,
    description: description,
    max_depth: max_depth,
    duration: duration,
    max_group: max_group,
    time: time,
  } as DivesInterface

  updateDives(updateData)
    .then((update) => {
      res.json(update)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  deleteDives(id)
    .then((dives) => {
      res.json(dives)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})
export default router
