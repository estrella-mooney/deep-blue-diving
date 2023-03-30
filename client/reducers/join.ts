import { JoinAction } from '../actions/joins'
import { Join } from '../../common/join'

export default function (state = [] as Join[], { type, payload }: JoinAction) {
  switch (type) {
    case 'SET_JOINS':
      return payload
    case 'ADD_JOINS':
      return [...state, ...payload]
    case 'DEL_JOINS':
      return state.filter(({ id }) => !payload.includes(id))
    default:
      return state
  }
}
