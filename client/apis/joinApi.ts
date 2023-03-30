import request from 'superagent'
import { Join } from '../../common/join'

export function getAllJoins(): Promise<Join[]> {
  return request.get('/api/v1/join').then((res) => res.body)
}

export function addDiversToDive(
  diver_ids: number[],
  dive_id: number
): Promise<Join[]> {
  return request
    .post(`/api/v1/join/divers-on-dive/${dive_id}`)
    .send(diver_ids)
    .then((res) => res.body)
}

export function addDiverToDives(
  diver_id: number,
  dive_ids: number[]
): Promise<Join[]> {
  return request
    .post(`/api/v1/join/dives-for-diver/${diver_id}`)
    .send(dive_ids)
    .then((res) => res.body)
}

export function deleteJoins(join_ids: number[]): Promise<number> {
  return request
    .delete('/api/v1/join')
    .send(join_ids)
    .then((res) => res.body)
}
