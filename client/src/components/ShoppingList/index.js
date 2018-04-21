import React, { Component } from 'react'
import axios from 'axios'

import * as config from '../../constants/config'
import Item from './Item'

class ShoppingList extends Component {
  constructor () {
    super()

    this.state = {
      shoppingList: [],
      loading: true
    }
  }

  componentDidMount () {
    axios.get(config.SERVER_URL + 'GetList/')
      .then((response) => this.setState({ shoppingList: response.data, loading: false }))
  }

  render () {
    const { shoppingList, loading } = this.state;

    return (
      <React.Fragment>
        {loading && <span>Loading...</span>}
        <ul>
        {shoppingList.map(
          (product, index) =>
            <li><Item key={index} item={product} /></li>
        )}
        </ul>
      </React.Fragment>
    )
  }
}

export default ShoppingList
