import React from 'react'
import { Row, Col, Form, Button } from "react-bootstrap";
import signUp from "../assets/body/signup.jpg"
import logo from "../assets/body/logo.png"
import micro from "../assets/body/login_w_micro.png"
import google from "../assets/body/login_w_google.png";
import {Link} from "react-router-dom"
const SignUp = () => {
    return (
        <>
            <Row className='justify-content-center mt-5'>
                <Col lg={9} md={9} sm={9} xs={9}>
                    <Row>
                        {/* left start */}
                        <Col lg={6} md={6} sm={12} xs={12} className='leftbgColor p-5'>
                            <Row className='justify-content-center'>
                                <Col lg={12} md={12} sm={12} xs={12} className='text-center m-5'><h1 className='fontWhite'>Lorem ipsum dolor sit amet consectetur.</h1>
                                </Col>
                                {/* <Col lg={6} md={6} sm={6} xs={6} className='text-center'><img src={signUp} height="auto" /></Col> */}
                                <Col lg={12} md={12} sm={12} xs={12} className='text-center'>
                                    <img src={signUp} style={{ maxWidth: '100%', height: 'auto' }} alt="Sign Up" />
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
                                <Col className="d-flex justify-content-center align-items-center">

                                    <Form className="w-100 px-3 ">
                                        <Row className='pt-3'>
                                            <h2 >Sign <span style={{ color: "#4591FF" }}>Up</span></h2>
                                            <Form.Group as={Col} md="6" controlId="validationFormik101" className="position-relative">
                                                <Form.Label>First name</Form.Label>
                                                <Form.Control type="text" name="firstName" />
                                            </Form.Group>
                                            <Form.Group as={Col} md="6" controlId="validationFormik102" className="position-relative">
                                                <Form.Label>Last name</Form.Label>
                                                <Form.Control type="text" name="lastName" />
                                            </Form.Group>
                                        </Row>
                                        <Row>
                                            <Form.Group as={Col} md="6" controlId="validationFormik103" className="position-relative">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" name="email" />
                                            </Form.Group>
                                            <Form.Group as={Col} md="6" controlId="validationFormik104" className="position-relative">
                                                <Form.Label>Phone Number</Form.Label>
                                                <Form.Control type="text" name="phoneNumber" />
                                            </Form.Group>
                                        </Row>
                                        <Form.Group className="position-relative mb-3">
                                            <Form.Label>Set password</Form.Label>
                                            <Form.Control type="password" required name="password" />
                                        </Form.Group>
                                        <Row>
                                            <Col lg={6} md={6} sm={12} xs={12}>
                                                <Form.Group className="position-relative mb-3 d-flex align-items-center">
                                                    <Form.Check
                                                        required
                                                        name="terms"
                                                        id="validationFormik106"
                                                        className="me-2" // Adds margin to the right of the checkbox
                                                    />
                                                    <label htmlFor="validationFormik106" className="mb-0 ">
                                                      <span  style={{fontSize:"small"}}>  I Agree to the <span style={{ color: "#4591FF" }}>Terms of Service</span> and
                                                        <span style={{ color: "#4591FF" }}> Privacy Policy</span></span>
                                                    </label>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={6} sm={12} xs={12}><Form.Group className="position-relative   mb-3 ms-4">
                                                <span style={{fontSize:"small"}}>Already register <Link to="/signin" style={{ color: " #4591FF" }}>back to Log IN</Link></span>
                                            </Form.Group></Col>
                                        </Row>

                                        <div className="d-flex justify-content-center mt-3">
                                            <Button type="submit" className='px-5'>Next</Button>
                                        </div>
                                    </Form>
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12} className="rigthbgColor d-flex flex-column justify-content-center align-items-center position-relative mt-2">

                                    <span> or</span>

                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12} className="rigthbgColor d-flex flex-column justify-content-center align-items-center position-relative mt-2">

                                    <span><img src={google}/></span>

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

export default SignUp;