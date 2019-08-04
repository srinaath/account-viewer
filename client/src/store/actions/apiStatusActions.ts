import * as types from './actionTypes'

export function beginApiCall (): any {
  return { type: types.BEGIN_API_CALL }
}

export function apiCallError (): any {
  return { type: types.API_CALL_ERROR }
}
