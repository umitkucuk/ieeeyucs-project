import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import * as routes from '../../constants/routes'

const Ul = styled.ul`
  float: right;
  list-style: none;
  margin: 0;
  padding: 0;
  & > li {
    display: inline-block;
    & > a {
      display: block;
      padding: 6px 12px;
      text-decoration: none;
    }
  }
`

const NavLinks = () =>
  <Ul>
    <li><Link to={routes.HOME}>Home</Link></li>
  </Ul>

export default NavLinks
