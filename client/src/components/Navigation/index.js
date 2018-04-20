import React from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'

import NavLinks from './NavLinks'

const StyledNav = styled.nav`
  padding: 10px 0;
`

const Navigation = () =>
  <StyledNav>
    <Grid>
      <Row>
        <Col xs={12} md={6}>
          Logo
        </Col>
        <Col xs={12} md={6}>
          <NavLinks />
        </Col>
      </Row>
    </Grid>
  </StyledNav>

export default Navigation
