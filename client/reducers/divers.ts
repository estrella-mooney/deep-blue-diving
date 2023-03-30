import { Diver, DiverInfo } from '../../common/diver'
import { DiverAction } from '../actions/divers'

export default function (
  state = [] as Diver[],
  { type, payload }: DiverAction
): Diver[] {
  switch (type) {
    case 'SET_DIVERS':
      return payload
    case 'UPDATE_DIVER':
      return state.map((diver) => (diver.id === payload.id ? payload : diver))
    case 'DEL_DIVER':
      return state.filter((diver) => diver.id !== payload)
    case 'ADD_DIVER':
      return [...state, payload]
    default:
      return state
  }
}
