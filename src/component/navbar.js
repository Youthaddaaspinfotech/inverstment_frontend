import { React, useState } from 'react'
import { Navbar, Container, Nav, Form, NavDropdown, Button, Row, Col, Dropdown } from "react-bootstrap";
import logoImg from "../assets/body/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getUserInfoAction } from "../actions/admin.actions";


import { useTranslation } from 'react-google-multi-lang';

const Navbarr = () => {
  const [userName, setUserName] = useState('');
  const user = JSON.parse(localStorage.getItem('userData')) || ''

  const getList = async () => {
    const resp = await getUserInfoAction({ userId: user._id });
    if (resp.code === 200) {
      setUserName(resp.data);
    }
  }

  return (
    <>
      {/* navbar start */}
      <Navbar expand="lg" className="navbarbg">
        <Container fluid>
          <Navbar.Brand href="#"><img src={logoImg} className='logoImg' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 navlink "
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

              <Nav.Link as={Link} to="/home" className='textColor'>Home</Nav.Link>


              <Nav.Link as={Link} to="/about" className='textColor'>About</Nav.Link>

              <Nav.Link as={Link} to="/Property_portfolio" className='textColor'>Portfolio</Nav.Link>
              <Nav.Link as={Link} to="/get_in_touch" className='textColor'>Contact</Nav.Link>


            </Nav>
            <Nav>
              <Row>
                {/* <Col lg={5} md={} sm={} xs={}> */}
                {/* <NavDropdown title="Language" id="navbarScrollingDropdown" className=' dropdownButton mt-2'>
                  <NavDropdown.Item href="#action1">Hindi</NavDropdown.Item>
                  <NavDropdown.Item href="#action2">English</NavDropdown.Item>
                </NavDropdown> */}
                {/* </Col> */}
                <Col lg={2}><Nav.Link href="#notifications" aria-label="Notifications" className='mt-2 me-2'>
                  <FontAwesomeIcon icon={faBell} style={{ color: '#f0f2f5' }} size="lg" />
                </Nav.Link></Col>
                <Col lg={2}><Nav.Link as={Link} to="/logout" aria-label="Logout" className='mt-2 me-2'>
                  <FontAwesomeIcon icon={faSignOutAlt} style={{ color: '#f0f2f5' }} size="lg" />
                </Nav.Link></Col>

                {/* <Col lg={1}>  <Nav.Link href="#settings" aria-label="Settings " className='mt-2 me-1'>
                  <FontAwesomeIcon icon={faGear} style={{ color: '#ecf2f4' }} size="lg" />
                </Nav.Link></Col> */}
                <Col lg={8}> <Nav.Link href="#profile" aria-label="Profile" className='mt-1'><span className='me-2  textColor'>{userName ? userName.name : "User"}</span>
                  <FontAwesomeIcon icon={faCircleUser} size="2xl" className='me-2' />
                </Nav.Link></Col>
              </Row>

            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* navbar end */}
    </>
  )
}

export default Navbarr;