import 'core-js'
import 'regenerator-runtime/runtime'
import App from './App'
import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from './store/configureStore'
import { Provider as ReduxProvider } from 'react-redux'

import './styles/global.scss'

const store: any = configureStore()
render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById('app')
)
