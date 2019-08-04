import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Banner from './pages/Banner/Banner'
import Header from './components/Header/Header'
import AccountsPage from './pages/Accounts/Accounts'

function App (): any {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={AccountsPage} />
      </Switch>
    </div>
  )
}

export default App
