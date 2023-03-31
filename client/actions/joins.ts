import { Join } from '../../common/join'
import * as API from '../apis/joinApi'
import { ThunkAction } from '../store'
import { setError } from './error'

export type JoinAction =
  | { type: 'SET_JOINS' | 'ADD_JOINS'; payload: Join[] }
  | { type: 'DEL_JOINS'; payload: number[] }

function setJoins(joins: Join[]): JoinAction {
  return { type: 'SET_JOINS', payload: joins }
}

function addJoins(joins: Join[]): JoinAction {
  return { type: 'ADD_JOINS', payload: joins }
}

function delJoins(ids: number[]): JoinAction {
  return { type: 'DEL_JOINS', payload: ids }
}

export function getJoins(): ThunkAction {
  return (dispatch) => {
    return API.getAllJoins()
      .then((joins) => {
        dispatch(setJoins(joins))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function addDiversToDive(
  diver_ids: number[],
  dive_id: number
): ThunkAction {
  return (dispatch) => {
    return API.addDiversToDive(diver_ids, dive_id).then((joins) => {
      dispatch(addJoins(joins))
    })
  }
}

export function addDiverToDives(
  diver_id: number,
  dive_ids: number[]
): ThunkAction {
  return (dispatch) => {
    return API.addDiverToDives(diver_id, dive_ids).then((joins) => {
      dispatch(addJoins(joins))
    })
  }
}

export function deleteJoins(join_ids: number[]): ThunkAction {
  return (dispatch) => {
    return API.deleteJoins(join_ids).then(() => {
      dispatch(delJoins(join_ids))
    })
  }
}
