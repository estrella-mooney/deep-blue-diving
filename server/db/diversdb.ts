import connection from './connection'
import { Diver } from '../../common/diver'

// getting all divers

export function getAllDivers(db = connection): Promise<Diver[]> {
  return db('divers').select('*')
}

// get a diver

export function getDiver(id: number, db = connection): Promise<Diver> {
  return db('divers').first().where({ id })
}

// add diver
