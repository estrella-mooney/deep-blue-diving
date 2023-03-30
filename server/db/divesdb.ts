import connection from './connection'
import { DivesInterface } from '../../common/Dives'

export function getAllDives(db = connection): Promise<DivesInterface[]> {
  return db('dives').select('*')
}

export function getIndivudualDives(
  id: number,
  db = connection
): Promise<number> {
  return db('dives').select().first().where('dives.id', id)
}

export function createDives(
  newDives: DivesInterface,
  db = connection
): Promise<DivesInterface[]> {
  return db('dives')
    .insert({
      title: newDives.title,
      description: newDives.description,
      max_depth: newDives.max_depth,
      duration: newDives.duration,
      max_group: newDives.max_group,
      time: newDives.time,
    })
    .returning([
      'id',
      'title',
      'description',
      'max_depth AS maxDepth',
      'duration',
      'max_group AS maxGroup',
      'time',
    ])
}

export function updateDives(
  updateDiveSpot: DivesInterface,
  db = connection
): Promise<DivesInterface[]> {
  return db('dives')
    .select()
    .where('dives.id', updateDiveSpot.id)
    .first()
    .update({
      title: updateDiveSpot.title,
      description: updateDiveSpot.description,
      max_depth: updateDiveSpot.max_depth,
      duration: updateDiveSpot.duration,
      max_group: updateDiveSpot.max_group,
      time: updateDiveSpot.time,
    })
    .returning([
      'id',
      'title',
      'description',
      'max_depth AS maxDepth',
      'duration',
      'max_group AS maxGroup',
      'time',
    ])
}

export function deleteDives(id: number, db = connection): Promise<number> {
  return db('dives')
    .where('id', id)
    .del()
    .then(() => {
      return db('dives').delete().where('id', id)
    })
}
