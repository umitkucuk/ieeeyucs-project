import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import * as routes from '../constants/routes'
import Navigation from './Navigation'
import HomePage from './Home'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navigation />
          <Route exact path={routes.HOME} component={HomePage} />
        </React.Fragment>
      </Router>
    )
  }
}

export default App
