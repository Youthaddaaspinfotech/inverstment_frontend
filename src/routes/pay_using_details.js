import React from 'react'
import { Card, Button, Row, Col, Form, ListGroup } from "react-bootstrap"
import pay_using from "../assets/card/card_icon/pay_using.png"
import { Link, useLocation } from 'react-router-dom';
const Pay_using_details = () => {
  const location = useLocation();
  const { amount } = location.state || {};
  return (
    <>

      <Row className="justify-content-center mt-4 p-2">
        <Col lg={9}>

          <Card className='cardborder'>
            <Card.Body>
              <Card.Title className='text-center'><h1>Pay Using This Details</h1></Card.Title>
              <Row className="justify-content-center mt-4  ">
                <Col lg={11}>
                  <Row className="ustify-content-center mt-4 g-4">
                    <Col lg={7}>
                      <Form >
                        <h6>Account Detail</h6>
                        <Row className="mb-3">

                          <Form.Group as={Col} md="12" controlId="validationFormik01">
                            <Form.Label>Account Number</Form.Label>
                            <Form.Control
                              type="text"
                              name="firstName" placeholder='932567890765' disabled />
                          </Form.Group>
                        </Row>
                        <Row className="mb-3">
                          <Form.Group as={Col} md="12" controlId="validationFormik03">
                            <Form.Label>IFSC Code</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="SBIND00456"
                              name="city" disabled />
                          </Form.Group>

                        </Row>
                        <h5>UPI ID</h5>
                        <span>1234567890@ibk</span>

                      </Form>
                    </Col>
                    <Col lg={5}>
                      <Card className='paycard'>
                        <ListGroup variant="flush" className='p-1'>
                          <ListGroup.Item>
                            <Row className='g-2 p-1'>
                              <Col lg={12} md={12} sm={12} xs={12}>
                                <h6><img src={pay_using} /> <span>Payment Summary</span></h6>
                              </Col>
                              <Col className='text-start'> Product name</Col>
                              <Col className='text-end'>Price</Col>
                            </Row>
                          </ListGroup.Item>
                          <ListGroup.Item >
                            <Row className='g-3 '>
                              <Col>Pune Property</Col>
                              <Col className='text-end'>30,00,000</Col>
                            </Row>

                            <Row className='g-3 mt-3'>

                              <Col>Intrest</Col>
                              <Col className='text-end'>11%</Col>
                            </Row>


                          </ListGroup.Item>
                          {/* <ListGroup.Item><h5 className='text-end'><span>Total:</span>35,00,000</h5></ListGroup.Item> */}
                          <ListGroup.Item>
                            <h5 className="text-end">
                              <span>Total:</span> {amount ? amount : "35,00,000"}
                            </h5>
                          </ListGroup.Item>
                        </ListGroup>

                      </Card>
                      <Button variant="success" className='w-100 mt-3'>
                        <Link to="/Property_portfolio" style={{ textDecoration: 'none', color: 'white' }}>
                          Payment Completed
                        </Link>
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>

        </Col>
      </Row>
    </>

  )
}

export default Pay_using_details;