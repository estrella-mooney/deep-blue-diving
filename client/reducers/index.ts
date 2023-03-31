import { combineReducers } from 'redux'

import divers from './divers'
import dives from './dives'
import joins from './join'
import error from './error'

// import stuff from './stuff'

export default combineReducers({
  divers,
  dives,
  joins,
  error,
  // stuff
})
