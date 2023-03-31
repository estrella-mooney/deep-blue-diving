import { combineReducers } from 'redux'

import divers from './divers'
import dives from './dives'
import error from './error'

// import stuff from './stuff'

export default combineReducers({
  divers,
  dives,
  error,
  // stuff
})
