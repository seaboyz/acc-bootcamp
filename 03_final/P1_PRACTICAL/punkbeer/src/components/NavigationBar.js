import React from 'react'

import { Navbar, Nav } from 'react-bootstrap'

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand='lg' bg='success' variant='dark'>
      <Navbar.Brand href='#home'>Beans Love Beers</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/'>Favourites</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar
