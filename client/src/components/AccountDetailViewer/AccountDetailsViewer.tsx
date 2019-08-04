import * as React from 'react'
import './AccountDetailsViewer.scss'

const AccountDetailsViewer: any = ({ accountDetails, onAddressClick }: any): any => {
  if (accountDetails.accountNumber) {
    return (
      <div className="AccountDetailsViewer">
        <ul className="list-group">
          <li className="list-group-item-primary">
            <span className="font-weight-bold d-block">
              Website:
            </span>
            {accountDetails.website}
          </li>
          <li className="list-group-item-primary">
            <span className="font-weight-bold d-block">
              Account Number:
            </span>
            {accountDetails.accountNumber}
          </li>
          <li className="list-group-item-primary AccountDetailsViewer__clickable" onClick={(): any => onAddressClick(accountDetails.billingStreet)}>
            <span className="font-weight-bold d-block">
              Address:
            </span>
            {accountDetails.billingStreet}
          </li>
        </ul>
      </div>
    )
  } else {
    return null
  }
}
export default AccountDetailsViewer
