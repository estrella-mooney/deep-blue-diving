import { Diver, DiverInfo } from '../../common/diver'
import { DiverAction } from '../actions/divers'

export default function (
  state = [] as Diver[],
  { type, payload }: DiverAction
): Diver[] {
  switch (type) {
    case 'SET_DIVERS':
      return payload
    case 'UPDATE_DIVERS':
      return state.map((diver) => (diver.id === payload.id ? payload : diver))
    case 'DEL_DIVERS':
      return state.filter((diver) => diver.id !== payload)
    case 'NEW_DIVER':
      return [...state, payload]
    default:
      return state
  }
}
