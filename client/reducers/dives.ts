import { DivesAction } from '../actions/dives'
import { DivesInterface } from '../../common/Dives'

const initialState = [] as DivesInterface[]

const divesReducer = (
  state = initialState,
  action: DivesAction
): DivesInterface[] => {
  const { type, payload } = action
  switch (type) {
    case 'SET_DIVES':
      return payload
    case 'UPDATE_DIVES':
      return state.map((dive) => (dive.id === payload.id ? payload : dive))
    case 'ADD_DIVES':
      return [...state, payload]
    case 'DEL_DIVES':
      return state.filter((dive) => dive.id !== payload)
    default:
      return state
  }
}

export default divesReducer
