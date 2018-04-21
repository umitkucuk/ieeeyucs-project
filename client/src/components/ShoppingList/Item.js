import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import * as config from '../../constants/config'

const StyledItem = styled.a`
  display: block;
  text-decoration: ${props => props.receipt ? 'line-through' : 'none'};
`

class Item extends Component {
  constructor () {
    super()

    this.state = {
      name: '',
      count: 0,
      buy: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    this.setState({
      name: this.props.item.name,
      count: this.props.item.count,
      buy: this.props.item.buy
    })
  }

  handleClick (e) {
    e.preventDefault()

    if (this.state.buy === false) {
    this.setState({
      buy: true
    })

    axios.get(config.SERVER_URL + "List/buy/" + this.state.name + "/true")
      .then((response) => {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    } else {
      this.setState({
        buy: false
      })

      axios.get(config.SERVER_URL + "List/buy/" + this.state.name + "/false")
      .then((response) => {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }

  render () {
    const { name, count, buy } = this.state

    return(
      <React.Fragment>
        {buy ?
          (<StyledItem receipt>
            <h1>{name}</h1>
            <h1>{count}</h1>
          </StyledItem>)
          :
          (<StyledItem>
            <h1>{name}</h1>
            <h1>{count}</h1>
          </StyledItem>)
        }
        <button onClick={this.handleClick}>Buy</button>
      </React.Fragment>  
    )
  }
}

export default Item
