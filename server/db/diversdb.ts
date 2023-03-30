import connection from './connection'
import { Diver, DiverInfo } from '../../common/diver'

// getting all divers

export function getAllDivers(db = connection): Promise<Diver[]> {
  return db('divers').select('*')
}

// READ diver

export function getDiver(id: number, db = connection): Promise<Diver> {
  return db('divers').first().where({ id })
}

// CREATE diver

export function addDiver(diver: DiverInfo, db = connection): Promise<Diver> {
  return db('divers')
    .insert(diver)
    .then(([id]) => ({ id, ...diver }))
}

//DELETE diver

export function delDiver(id: number, db = connection): Promise<number> {
  return db('diver').delete().where({ id })
}

//UPDATE function

export function updateDiver(diver: Diver, db = connection): Promise<Diver> {
  return db('diver')
    .update(diver)
    .where('id', diver.id)
    .returning('*')
    .then(([diver]) => diver)
}
