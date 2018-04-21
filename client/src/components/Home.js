import React, { Component } from 'react'
import { Grid } from 'react-flexbox-grid'

import ShoppingList from './ShoppingList'

class Home extends Component {
  render () {
    return (
      <Grid>
        <ShoppingList />
      </Grid> 
    )
  }
}

export default Home
