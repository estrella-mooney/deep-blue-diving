import type { ThunkAction } from '../store'
import { Diver, DiverInfo } from '../../common/diver'
import { getAllDivers } from '../apis/apiDivers'

export type Action =
  | { type: 'SET_DIVERS'; payload: Diver[] }
  | { type: 'DEL_DIVERS'; payload: Diver[] }
  | {
      type: 'UPDATE_DIVERS'
      payload: { oldDiver: Diver[]; newDiver: Diver[] }
    }

export function showDivers(setDivers: Diver[]): Action {
  return {
    type: 'SET_DIVERS',
    payload: setDivers,
  }
}

export function updateDivers(oldDiver: Diver[], newDiver: Diver[]): Action {
  return {
    type: 'UPDATE_DIVERS',
    payload: {
      oldDiver: oldDiver,
      newDiver: newDiver,
    },
  }
}

export function deleteDivers(deleteDivers: Diver[]): Action {
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
