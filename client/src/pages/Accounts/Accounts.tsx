import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AccountViewer from '../../components/AccountViewer/AccountViewer'
import AccountDetailsViewer from '../../components/AccountDetailViewer/AccountDetailsViewer'
import MapsViewer from '../../components/MapsViewer/MapsViewer'

import * as accountActions from '../../store/actions/accountActions'
import './Accounts.scss'

interface Props {
  accounts: Account[],
  actions: string[]
}

class Accounts extends React.Component<Props> {
  constructor (props: Props) {
    super(props)

    this.state = {
      selectedAccount : {},
      selectedAddress : ''
    }

    this.onSelectAccount = this.onSelectAccount.bind(this)
    this.onAddressClick = this.onAddressClick.bind(this)
  }

  public componentDidMount (): void {
    const { actions } = this.props
    ;(actions as any).loadAccounts()
  }

  public onSelectAccount (account: Account): void {
    this.setState({
      selectedAccount: account
    })
  }

  public onAddressClick (address: string): void {
    this.setState({
      selectedAddress: address
    })
  }

  public render (): any {
    return (
      <div className="AccountsPage row">
        <div className="col-lg-6 col-xs-12">
          <AccountViewer accounts={this.props.accounts} onSelectAccount={this.onSelectAccount} selectedAccount={(this.state as any).selectedAccount}/>
        </div>
        <div className="col-lg-6 col-md-12">
          <AccountDetailsViewer accountDetails={(this.state as any).selectedAccount} onAddressClick={this.onAddressClick}/>
          <MapsViewer address={(this.state as any).selectedAddress}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state: any): any {
  return {
    accounts: state.accounts
  }
}

function mapDispatchToProps (dispatch: any): any {
  return {
    actions: {
      loadAccounts: bindActionCreators(accountActions.loadAccounts, dispatch)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Accounts)
