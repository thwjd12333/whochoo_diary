import { combineReducers } from 'redux'
import user from './User'
import dayLog from './DayLogs'

const rootReducer = combineReducers({
  user,
  dayLog,
})

export default rootReducer
