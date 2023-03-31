import request from 'superagent'
import { Diver, DiverInfo } from '../../common/diver'

export function getAllDivers(): Promise<Diver[]> {
  return request.get('/api/v1/divers').then((res) => res.body)
}

export function addDiverApi(diver: DiverInfo): Promise<Diver> {
  return request
    .post('/api/v1/divers')
    .send(diver)
    .then((res) => res.body)
}

export function updateDiver(diver: Diver): Promise<Diver> {
  return request
    .patch(`/api/v1/divers/${diver.id}`)
    .send(diver)
    .then((res) => res.body)
}

export function delDiver(id: number): Promise<void> {
  return request.delete(`/api/v1/divers/${id}`).then(() => {})
}
