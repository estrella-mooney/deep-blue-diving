import type { ThunkAction } from '../store'
import { DivesInterface } from '../../common/Dives'
import {
  getDives,
  addNewDive,
  updateDivesApi,
  deleteDivesApi,
  getIndivudualDives,
} from '../apis/divesApi'
import { setError } from './error'

export type DivesAction =
  | { type: 'SET_DIVES'; payload: DivesInterface[] }
  | { type: 'DEL_DIVES'; payload: number }
  | { type: 'UPDATE_DIVES'; payload: DivesInterface }
  | { type: 'ADD_DIVES'; payload: DivesInterface }

export function showDives(setDives: DivesInterface[]): DivesAction {
  return {
    type: 'SET_DIVES',
    payload: setDives,
  }
}

export function updateDive(newDive: DivesInterface): DivesAction {
  return {
    type: 'UPDATE_DIVES',
    payload: newDive,
  }
}

export function addDive(addDive: DivesInterface): DivesAction {
  return {
    type: 'ADD_DIVES',
    payload: addDive,
  }
}

export function deleteDives(id_to_del: number): DivesAction {
  return {
    type: 'DEL_DIVES',
    payload: id_to_del,
  }
}

// fetching to Database

export function fetchDives(): ThunkAction {
  return (dispatch) => {
    return getDives()
      .then((dives) => {
        dispatch(showDives(dives))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function thunkAddDive(dive: DivesInterface): ThunkAction {
  return (dispatch) => {
    return addNewDive(dive)
      .then((dive) => {
        dispatch(addDive(dive))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function thunkDelDive(dive_id: number): ThunkAction {
  return (dispatch) => {
    return deleteDivesApi(dive_id)
      .then(() => {
        dispatch(deleteDives(dive_id))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function thunkUpdateDive(dive: DivesInterface): ThunkAction {
  return (dispatch) => {
    return updateDivesApi(dive)
      .then((dive) => {
        dispatch(updateDive(dive))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}
