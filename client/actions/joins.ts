import { Join } from '../../common/join'

export type JoinAction =
  | { type: 'SET_JOINS' | 'ADD_JOINS'; payload: Join[] }
  | { type: 'DEL_JOINS'; payload: number[] }

export function setJoins(joins: Join[]): JoinAction {
  return { type: 'SET_JOINS', payload: joins }
}

export function addJoins(joins: Join[]): JoinAction {
  return { type: 'ADD_JOINS', payload: joins }
}

export function delJoins(ids: number[]): JoinAction {
  return { type: 'DEL_JOINS', payload: ids }
}
