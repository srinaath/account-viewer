import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function courseReducer (state: Account[] = initialState.accounts, action: any): Account[] {
  switch (action.type) {
    case types.LOAD_ACCOUNTS_SUCCESS:
      return action.accounts
    default:
      return state
  }
}
