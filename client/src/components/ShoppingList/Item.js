import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import axios from 'axios'

import * as config from '../../constants/config'

const StyledItem = styled.a`
  background-color: #fff;
  border: .2rem solid rgb(235, 240, 244);
  border-radius: .8rem;
  display: block;
  opacity: ${props => props.receipt ? '.5' : '1'};
  padding: 1rem;
  position: relative;
  text-decoration: ${props => props.receipt ? 'line-through' : 'none'};
  transition: .2s ease-in-out all;

  &:hover {
    box-shadow: 0 .1rem 1.4rem rgba(0, 0, 0, .08);
    cursor: pointer;
  }

  &:after {
    display: table;
    content: '';
    clear: both;
  }

  & > h4 {
    color: rgb(124, 132, 149);
    display: block;
    font-size: 1.8rem;
    font-weight: 400;
    margin: 1rem 0;
    max-width: 90%;
  }

  & > span {
    background: #f9a68c;
    background: -webkit-linear-gradient(to right, #fa88aa, #f9a68c);
    background: linear-gradient(to right, #fa88aa, #f9a68c);
    border-radius: .6rem;
    color: #fff;
    display: inline-block;
    padding: .8rem 1.2rem;
    position: absolute;
    right: 1rem;
    top: 23%;
  }
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

      axios.get(config.SERVER_URL + 'List/buy/' + this.state.name + '/true')
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

      axios.get(config.SERVER_URL + 'List/buy/' + this.state.name + '/false')
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

    return (
      <React.Fragment>
        {buy
          ? (<StyledItem onClick={this.handleClick} receipt>
            <h4>{name}</h4>
            <span>{count}</span>
          </StyledItem>)
          : (<StyledItem onClick={this.handleClick}>
            <h4>{name}</h4>
            <span>{count}</span>
          </StyledItem>)
        }
      </React.Fragment>
    )
  }
}

Item.propTypes = {
  item: PropTypes.object
}

export default Item
