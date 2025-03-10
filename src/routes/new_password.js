import React from 'react'
import { Row, Col, Form, Button } from "react-bootstrap";
import login from "../assets/body/login.jpg"
import logo from "../assets/body/logo.png"
import micro from "../assets/body/login_w_micro.png"
import google from "../assets/body/login_w_google.png";
import { bottom } from '@popperjs/core';
const  Newpassword = () => {
    return (
        <>
            <Row className='justify-content-center mt-4'>
                <Col lg={9} md={9} sm={9} xs={9}>
                    <Row>
                        {/* left start */}
                        <Col lg={6} md={6} sm={12} xs={12} className='leftbgColor p-4'>
                            <Row className='justify-content-center'>
                                <Col lg={12} md={12} sm={12} xs={12} className='text-center m-5'><h1 className='fontWhite'>Lorem ipsum dolor sit amet consectetur.</h1>
                                </Col>
                                {/* <Col lg={6} md={6} sm={6} xs={6} className='text-center'><img src={signUp} height="auto" /></Col> */}
                                <Col lg={12} md={12} sm={12} xs={12} className='text-center'>
                                    <img src={login} style={{ maxWidth: '100%', height: 'auto' }} alt="Sign Up" />
                                </Col>
                            </Row>
                        </Col>

                        {/* left end */}
                        {/* rigth start */}
                        <Col lg={6} md={6} sm={12} xs={12} className='rigthbgColor p-5'>
                            <Row>
                                <Col lg={12} md={12} sm={12} xs={12} className="d-flex justify-content-end align-items-start">
                                    <img src={logo} className="logoImg" alt="Logo" />
                                </Col>
                                <Col className="d-flex justify-content-center align-items-center pt-5 ">

                                    <Form className="w-100 px-3 ">
                                        <Row className='pt-3'>
                                            <Col lg={12} md={12} sm={12} xs={12}><h4>Create <span style={{ color: "#4591FF", borderBottom:"2px solid #4591FF"}}> New Password</span></h4></Col>
                                            <Col lg={12} md={12} sm={12} xs={12}> <p style={{ fontWeight: "bold" }} className='mt-2'>Your new password must be different from previous used passwords..</p></Col>
                                            <Form.Group as={Col} md="12" controlId="validationFormik103" className="position-relative">
                                                <Form.Label>New Password<span style={{ color: "red" }}>*</span></Form.Label>
                                                <Form.Control type="password" name="password" />
                                            </Form.Group>
                                            <Form.Group as={Col} md="12" controlId="validationFormik103" className="position-relative mt-2">
                                                <Form.Label>Confirm New Password<span style={{ color: "red" }}>*</span></Form.Label>
                                                <Form.Control type="password" name="password" />
                                            </Form.Group>

                                        </Row>
                                        <Row className='mt-3 g-4'>
                                            <Col lg={4} md={6} sm={12} xs={12} className='g-3'>
                                                <Button type="submit" className='px-4 bg-white text-black w-100'>Back</Button>
                                            </Col>
                                            <Col lg={4} md={6} sm={12} xs={12} className='g-3'>
                                                <Button type="submit" className='px-4 w-100' style={{ fontSize: "small", padding: "9px" }}>Submit</Button>
                                            </Col>
                                        </Row>


                                    </Form>
                                </Col>



                            </Row>
                        </Col>
                        {/* rigth end */}
                    </Row>
                </Col>

            </Row >

        </>
    )
}

export default Newpassword;