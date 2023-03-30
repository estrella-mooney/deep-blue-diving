import conn from './connection'
import { DiverName, DiveTitle, Join } from '../../common/join'

export function addDiverToDives(
  diver_id: number,
  dive_ids: number[],
  db = conn
): Promise<Join[]> {
  return db('divers_dive')
    .insert(dive_ids.map((dive_id) => ({ diver_id, dive_id })))
    .returning('*')
}

export function addDiversToDive(
  diver_ids: number[],
  dive_id: number,
  db = conn
): Promise<Join[]> {
  return db('divers_dive')
    .insert(diver_ids.map((diver_id) => ({ diver_id, dive_id })))
    .returning('*')
}

export function getJoins(db = conn): Promise<Join[]> {
  return db('divers_dive').select()
}

export function getDiversOnDive(
  dive_id: number,
  db = conn
): Promise<DiverName[]> {
  return db('divers_dive')
    .join('divers', 'diver_id', 'divers.id')
    .select({ dive_id })
    .returning(['divers_dive.id', 'divers.name'])
}

export function getDivesForDiver(
  diver_id: number,
  db = conn
): Promise<DiveTitle[]> {
  return db('divers_dive')
    .join('dives', 'dive_id', 'dives.id')
    .select({ diver_id })
    .returning(['divers_dive.id', 'dive.title'])
}

export function deleteJoins(ids: number[], db = conn): Promise<number> {
  return db('divers_dive').delete().whereIn('id', ids)
}
