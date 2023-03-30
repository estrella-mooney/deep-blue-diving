import { Join } from '../../common/join'
import { getAllJoins } from '../apis/joinApi'
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
    return getAllJoins()
      .then((joins) => {
        dispatch(setJoins(joins))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

// export function
