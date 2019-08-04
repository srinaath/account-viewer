import axios from 'axios'
import * as types from './actionTypes'
import { AccountDetails as Account } from '../../types/types'
import { beginApiCall, apiCallError } from './apiStatusActions'

export function loadAccountsSuccess (accounts: Account[]): any {
  return { type: types.LOAD_ACCOUNTS_SUCCESS, accounts }
}

export function loadAccounts (): any {
  return function (dispatch: any): void {
    dispatch(beginApiCall())
    axios.get('http://localhost:8000/api/accounts')
    .then((accountsJson: any) => {
      const accounts: Account[] = accountsJson.data.map((account: any): Account => {
        return {
          name: account.name,
          billingStreet: account.billingstreet,
          accountNumber: account.accountnumber,
          ownership: account.ownership,
          website: account.ownership,
          latitude: account.billinglatitude,
          longitude: account.billinglongitude
        }
      })
      dispatch(loadAccountsSuccess(accounts))
    })
    .catch((err: any) => {
      dispatch(apiCallError())
      throw err
    })
  }
}
