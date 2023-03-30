import type { ThunkAction } from '../store'
import { DivesInterface } from '../../common/Dives'
import { getDives } from '../apis/divesApi'

export type Action =
  | { type: 'SET_DIVES'; payload: DivesInterface[] }
  | { type: 'DEL_DIVES'; payload: DivesInterface[] }
  | {
      type: 'UPDATE_DIVES'
      payload: { oldDive: DivesInterface[]; newDive: DivesInterface[] }
    }

export function showDives(setDives: DivesInterface[]): Action {
  return {
    type: 'SET_DIVES',
    payload: setDives,
  }
}

export function updateDives(
  oldDive: DivesInterface[],
  newDive: DivesInterface[]
): Action {
  return {
    type: 'UPDATE_DIVES',
    payload: {
      oldDive: oldDive,
      newDive: newDive,
    },
  }
}

export function deleteDives(deleteDives: DivesInterface[]): Action {
  return {
    type: 'DEL_DIVES',
    payload: deleteDives,
  }
}

export function fetchDive(): ThunkAction {
  return (dispatch) => {
    return getDives()
      .then((dive) => {
        dispatch(showDives(dive))
      })
      .catch((err) => {
        dispatch(err.message)
      })
  }
}
