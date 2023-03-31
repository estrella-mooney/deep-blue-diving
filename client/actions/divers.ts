import type { ThunkAction } from '../store'
import { Diver, DiverInfo } from '../../common/diver'
import { getAllDivers } from '../apis/apiDivers'
import { setError } from './error'

export type DiverAction =
  | { type: 'SET_DIVERS'; payload: Diver[] }
  | { type: 'DEL_DIVER'; payload: number }
  | { type: 'UPDATE_DIVER'; payload: Diver }
  | { type: 'ADD_DIVER'; payload: Diver }

export function showDivers(setDivers: Diver[]): DiverAction {
  return {
    type: 'SET_DIVERS',
    payload: setDivers,
  }
}

export function addDiver(addDiver: Diver): DiverAction {
  return {
    type: 'ADD_DIVER',
    payload: addDiver,
  }
}

export function updateDiver(newDiver: Diver) {
  return {
    type: 'UPDATE_DIVER',
    payload: newDiver,
  }
}

export function deleteDiver(deleteDiver: number): DiverAction {
  return {
    type: 'DEL_DIVER',
    payload: deleteDiver,
  }
}

export function fetchDiver(): ThunkAction {
  return (dispatch) => {
    return getAllDivers()
      .then((diver) => {
        dispatch(showDivers(diver))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}
