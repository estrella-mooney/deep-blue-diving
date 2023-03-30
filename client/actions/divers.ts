import type { ThunkAction } from '../store'
import { Diver, DiverInfo } from '../../common/diver'
import { getAllDivers } from '../apis/apiDivers'

export type DiverAction =
  | { type: 'SET_DIVERS'; payload: Diver[] }
  | { type: 'DEL_DIVER'; payload: number }
  | { type: 'UPDATE_DIVERS'; payload: Diver }

export function showDivers(setDivers: Diver[]): DiverAction {
  return {
    type: 'SET_DIVERS',
    payload: setDivers,
  }
}

export function addDiver(): DiverAction {}

export function updateDivers(
  oldDiver: Diver[],
  newDiver: Diver[]
): DiverAction {
  return {
    type: 'UPDATE_DIVERS',
    payload: newDiver,
  }
}

export function deleteDivers(deleteDivers: Diver[]): DiverAction {
  return {
    type: 'DEL_DIVERS',
    payload: deleteDivers,
  }
}

export function fetchDiver(): ThunkAction {
  return (dispatch) => {
    return getAllDivers()
      .then((diver) => {
        dispatch(showDivers(diver))
      })
      .catch((err) => {
        dispatch(err.message)
      })
  }
}
