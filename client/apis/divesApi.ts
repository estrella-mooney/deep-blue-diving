import request from 'superagent'
import { DivesInterface } from '../../common/Dives'

export function getDives(): Promise<DivesInterface[]> {
  return request.get('/api/v1/dives').then((res) => res.body)
}

export function addNewDive(newDive: DivesInterface): Promise<DivesInterface> {
  return request
    .post('/api/v1/dives')
    .send(newDive)
    .then((res) => {
      return res.body
    })
}

export function updateDivesApi(dive: DivesInterface) {
  return request
    .patch(`/api/v1/dives/${dive.id}`)
    .send(dive)
    .then((res) => {
      return res.body
    })
}

export function deleteDivesApi(diveId: number): Promise<number> {
  return request.del(`/api/v1/dives/${diveId}`).then((res) => res.body)
}

export function getIndivudualDives(diveId: number): Promise<DivesInterface[]> {
  return request.get(`/api/v1/dives/${diveId}`).then((res) => res.body)
} //Don't need this as we are using redux to store the local copy of our db
