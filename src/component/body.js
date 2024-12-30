import React from 'react'
import { Container, Row, Col, Form, Navbar, Nav, Card, Button, ProgressBar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs, faCoins, faIndianRupeeSign, faTree, faHouseChimneyCrack, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import card1 from "../assets/card/caed1.jpg"
import card2 from "../assets/card/card2.jpg"
import card3 from "../assets/card/card3.jpg"
const Body = () => {
  return (
    <>

      <Row className='justify-content-center mt-4'>
        <Col lg={9}>
          {/* first navbar start */}
          <Row>
            <Col lg={4} md={4} sm={8} xs={8}>
              <Form className="d-flex ms-2">
                <Form.Control type="search" placeholder="Search for employee directory" className="searchButton" aria-label="Search" />

              </Form>
            </Col>

          </Row>






          {/* first navbar end */}
          {/* secound nav bar end */}
          <Row className='mt-3 p-2'>
            <Col>
              <Navbar collapseOnSelect expand="lg" className="gap-3 ms-2">

                <Nav.Link href="#features">All</Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto gap-2">
                    <Nav.Link href="#pricing">Open</Nav.Link>
                    <Nav.Link href="#pricing">Fully Funded</Nav.Link>
                    <Nav.Link href="#pricing">Exited</Nav.Link>
                    <Nav.Link href="#pricing">Resale</Nav.Link>


                  </Nav>


                </Navbar.Collapse>
              </Navbar>

            </Col>
          </Row>


          {/* secound nav bar end */}
          <Row className='m-1'>

            <Col lg={4} md={6} sm={12} xs={12} className='g-3'>

              <Row>
                <Col lg={12} className="cardContainer">
                  <Card.Img variant="top" src={card1} className="cardImg" />
                  <span className="btn21">   <FontAwesomeIcon icon={faLocationDot} style={{ "color": "blue" }} /> indore</span>
                </Col>
              </Row>
              <Card className='p-2'>



                <Card.Body>
                  <Card.Title>Pune Industrial Opportunity</Card.Title>
                  <Row>
                    <Col lg={1} md={1} sm={1} xs={1}><FontAwesomeIcon icon={faCrosshairs} size="xl" style={{ "color": "#060C7C" }} className='mt-2' /></Col>
                    <Col className='cartFont'>Target IRR <br /><span className='cardblue'>13%</span></Col>
                    <Col lg={1} md={1} sm={1} xs={1}><FontAwesomeIcon icon={faCoins} size="xl" style={{ "color": "#060C7C" }} className='mt-2' /></Col>
                    <Col className='cartFont'>Grass Entry yield <br /><span className='cardblue'>8.1%</span></Col>
                  </Row>
                  <Row>
                    <Col lg={1} md={1} sm={1} xs={1}><FontAwesomeIcon icon={faIndianRupeeSign} style={{ "color": "#060C7C" }} className='mt-2' /></Col>
                    <Col className='cartFont'>Asset Value<br /><span className='cardblue'>39.20Cr</span></Col>
                    <Col lg={1} md={1} sm={1} xs={1}><FontAwesomeIcon icon={faHouseChimneyCrack} style={{ "color": "#060C7C" }} className='mt-2' /></Col>
                    <Col className='cartFont'>Asset Type<br /><span className='cardblue'>Industrial</span></Col>
                  </Row>
                  <Row>

                    <Col lg={12} className='text-end'>95% Funded</Col>
                    <Col>  <ProgressBar variant="success" now={95} /></Col>
                  </Row>
                  <Row className="mt-3">
                    <Col lg={12} md={12} sm={12} xs={12} className="g-2">
                      <Button variant="primary" className="cardbtn w-100">Invest Now</Button>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12} className="g-2">
                      <Button variant="light" className="border border-primary cardbtn w-100">View Details</Button>
                    </Col>
                  </Row>


                </Card.Body>
              </Card>

            </Col>
            <Col lg={4} md={6} sm={12} xs={12} className='g-3'>

              <Row>
                <Col lg={12} className="cardContainer">
                  <Card.Img variant="top" src={card2} className="cardImg" />
                  <span className="btn21">   <FontAwesomeIcon icon={faLocationDot} style={{ "color": "blue" }} /> indore</span>
                </Col>
              </Row>
              <Card className='p-2'>



                <Card.Body>
                  <Card.Title>Pune Industrial Opportunity</Card.Title>
                  <Row>
                    <Col lg={1} md={1} sm={1} xs={1}><FontAwesomeIcon icon={faCrosshairs} size="xl" style={{ "color": "#060C7C" }} className='mt-2' /></Col>
                    <Col className='cartFont'>Target IRR <br /><span className='cardblue'>13%</span></Col>
                    <Col lg={1} md={1} sm={1} xs={1}><FontAwesomeIcon icon={faCoins} size="xl" style={{ "color": "#060C7C" }} className='mt-2' /></Col>
                    <Col className='cartFont'>Grass Entry yield <br /><span className='cardblue'>8.1%</span></Col>
                  </Row>
                  <Row>
                    <Col lg={1} md={1} sm={1} xs={1}><FontAwesomeIcon icon={faIndianRupeeSign} style={{ "color": "#060C7C" }} className='mt-2' /></Col>
                    <Col className='cartFont'>Asset Value<br /><span className='cardblue'>39.20Cr</span></Col>
                    <Col lg={1} md={1} sm={1} xs={1}><FontAwesomeIcon icon={faHouseChimneyCrack} style={{ "color": "#060C7C" }} className='mt-2' /></Col>
                    <Col className='cartFont'>Asset Type<br /><span className='cardblue'>Industrial</span></Col>
                  </Row>
                  <Row>

                    <Col lg={12} className='text-end'>95% Funded</Col>
                    <Col>  <ProgressBar variant="success" now={95} /></Col>
                  </Row>
                  <Row className="mt-3">
                    <Col lg={12} md={12} sm={12} xs={12} className="g-2">
                      <Button variant="primary" className="cardbtn w-100">Invest Now</Button>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12} className="g-2">
                      <Button variant="light" className="border border-primary cardbtn w-100">View Details</Button>
                    </Col>
                  </Row>


                </Card.Body>
              </Card>

            </Col>
            <Col lg={4} md={6} sm={12} xs={12} className='g-3'>

<Row>
  <Col lg={12} className="cardContainer">
    <Card.Img variant="top" src={card3} className="cardImg" />
    <span className="btn21">   <FontAwesomeIcon icon={faLocationDot} style={{ "color": "blue" }} /> indore</span>
  </Col>
</Row>
<Card className='p-2'>



  <Card.Body>
    <Card.Title>Pune Industrial Opportunity</Card.Title>
    <Row>
      <Col lg={1} md={1} sm={1} xs={1}><FontAwesomeIcon icon={faCrosshairs} size="xl" style={{ "color": "#060C7C" }} className='mt-2' /></Col>
      <Col className='cartFont'>Target IRR <br /><span className='cardblue'>13%</span></Col>
      <Col lg={1} md={1} sm={1} xs={1}><FontAwesomeIcon icon={faCoins} size="xl" style={{ "color": "#060C7C" }} className='mt-2' /></Col>
      <Col className='cartFont'>Grass Entry yield <br /><span className='cardblue'>8.1%</span></Col>
    </Row>
    <Row>
      <Col lg={1} md={1} sm={1} xs={1}><FontAwesomeIcon icon={faIndianRupeeSign} style={{ "color": "#060C7C" }} className='mt-2' /></Col>
      <Col className='cartFont'>Asset Value<br /><span className='cardblue'>39.20Cr</span></Col>
      <Col lg={1} md={1} sm={1} xs={1}><FontAwesomeIcon icon={faHouseChimneyCrack} style={{ "color": "#060C7C" }} className='mt-2' /></Col>
      <Col className='cartFont'>Asset Type<br /><span className='cardblue'>Industrial</span></Col>
    </Row>
    <Row>

      <Col lg={12} className='text-end'>95% Funded</Col>
      <Col>  <ProgressBar variant="success" now={95} /></Col>
    </Row>
    <Row className="mt-3">
      <Col lg={12} md={12} sm={12} xs={12} className="g-2">
        <Button variant="primary" className="cardbtn w-100">Invest Now</Button>
      </Col>
      <Col lg={12} md={12} sm={12} xs={12} className="g-2">
        <Button variant="light" className="border border-primary cardbtn w-100">View Details</Button>
      </Col>
    </Row>


  </Card.Body>
</Card>

</Col>
          </Row>
          {/* card section start */}

          <Row className='text-center mt-4'>
            <Col><Button>Load More</Button></Col>
          </Row>
          {/* card section end */}
        </Col>
      </Row>


    </>
  )
}

export default Body