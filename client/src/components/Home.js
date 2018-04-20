import React, { Component } from 'react'

import ShoppingList from './ShoppingList'

class Home extends Component {
  render () {
    return (
      <React.Fragment>
        <ShoppingList />
      </React.Fragment>
    )
  }
}

export default Home
