import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Banner from './pages/Banner/Banner'
import Header from './components/Header/Header'
import PdpCustomizer from './pages/PdpCustomizer/PdpCustomizer'
import Carousel from './pages/Carousel/Carousel'
import PostgresHelper from './lib/postgresHelper'

const pgHelper: any = PostgresHelper()
// tslint:disable-next-line:no-console
console.log(pgHelper.getAccountsData())
debugger
function App (): any {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/banner" component={Banner} />
        <Route exact path="/pdp-customizer" component={PdpCustomizer} />
        <Route exact path="/" component={Carousel} />
      </Switch>
    </div>
  )
}

export default App
