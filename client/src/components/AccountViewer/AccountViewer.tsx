import * as React from 'react'
import './AccountViewer.scss'

const AccountViewer: any = ({ accounts, onSelectAccount, selectedAccount }: any): any => (
  <div className="AccountViewer">
    <table className="table">
    <thead>
      <tr>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {accounts.map((account: Account, index: number) => {
        return (
          <tr className={selectedAccount && selectedAccount.name === account.name ? 'active' : ''} key={index} onClick={(): any => onSelectAccount(account)}>
            <td>
              <div className="AccountViewer__block">
                {account.name}
              </div>
            </td>
          </tr>
        )
      })}
    </tbody>
  </table>
  </div>
)
export default AccountViewer
