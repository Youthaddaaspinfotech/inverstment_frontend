import React from 'react';
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import get_img from "../assets/body/get_in_touch.png";
const Get_in_touch = () => {
    return (
        <>
            <Row className='justify-content-center mt-4 p-4'>
                <Col lg={9} className='bg-white getbody p-5'>
                    <Row>
                        <Col className='text-center mb-5 grtheading ' lg={12}>
                            <h1>Get in touch</h1>
                        </Col>
                        <Col>
                            <Row className='justify-content-center '>
                                <Col lg={9} className='bg-white'>
                                    <Card className="getdata">

                                        <Card.Body>
                                            <Row>
                                                <Col lg={5} md={5} sm={6} xs={12}> <Card.Img src={get_img} /></Col>
                                                <Col lg={7} md={7} sm={6} xs={12} className="" >
                                                    <Card.Title >Let's connect</Card.Title>
                                                    <Card.Text className='mb-4'>
                                                        Let's align our constellations! Reach out and let the magic of collaborating illuminate our skies.
                                                    </Card.Text>

                                                    <Form >
                                                        <Row className="mb-3 ">
                                                            <Form.Group as={Col} md="6" controlId="validationFormik101" className="position-relative">

                                                                <Form.Control type="text" name="FirstName" className='getinpbox' placeholder='First Name' />
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="6" controlId="validationFormik102" className="position-relative">

                                                                <Form.Control type="text" name="LastName" className='getinpbox' placeholder='Last Name' />
                                                            </Form.Group>
                                                        </Row>
                                                        <Row className="mb-3">
                                                            <Form.Group as={Col} md="12" controlId="validationFormik103" className="position-relative">

                                                                <Form.Control type="text" name="Email" className='getinpbox' placeholder='Email' />
                                                            </Form.Group>
                                                        </Row>
                                                        <Row className="mb-3">
                                                            <Form.Group as={Col} md="12" controlId="validationFormik103" className="position-relative">

                                                                <Form.Control type="text" className='getinpbox' name="Phone Number" placeholder='Phone Number' />
                                                            </Form.Group>
                                                        </Row>
                                                        <Row className="justify-content-center">
                                                            <Col className="text-center">
                                                                <Button type="submit" className='getbtn'>Submit</Button>
                                                            </Col>
                                                        </Row>

                                                    </Form>

                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Get_in_touch;