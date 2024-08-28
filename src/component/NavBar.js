import React, { useState } from 'react'
import { Button, Container, Form, Nav, Navbar, Row } from 'react-bootstrap'

const NavBar = ({filterbySearch}) => {
  const [searchvalue,setsearchvalue]=useState('')
  const onSearch=(e)=>{
    
    filterbySearch(searchvalue)
    setsearchvalue('')
  }
  return (
    <Row>
    <Navbar expand="lg" bg='dark' variant='dark' >
      <Container>
        <Navbar.Brand href="#">
        <div className='brand-color'>مطعم جديد</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="ابحث..."
              className="mx-2"
              onChange={(e)=> setsearchvalue(e.target.value)}
              value={searchvalue}
            />
            <Button onClick={()=> onSearch()} className='btn-search'>بحث</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
  )
}

export default NavBar
