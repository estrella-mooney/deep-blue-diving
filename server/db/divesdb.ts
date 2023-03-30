import connection from './connection'
import { DivesInterface } from '../../common/Dives'

export function getAllDives(db = connection): Promise<DivesInterface[]> {
  return db('dives').select('*')
}

export function getIndivudualDives(id: number, db = connection): Promise<>

getDivesById

createDives

updateDives

deleteDives
