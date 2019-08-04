import { combineReducers } from 'redux'
import accounts from './accountReducer'

const rootReducer: any = combineReducers({
  accounts
})

export default rootReducer
