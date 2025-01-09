import React, { useState } from 'react'
import { Row, Col, Form, Button } from "react-bootstrap";
import loginimg from "../assets/body/login.jpg"
import logo from "../assets/body/logo.png"
import google from "../assets/body/login_w_google.png";
import { useGoogleLogin } from '@react-oauth/google';
import { loginWithOtpAction } from '../actions/admin.actions';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
const Signin = () => {
    let navigate = useNavigate();
    const [isDisabled, setDisabled] = useState(false);
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({});

    const handleSubmit = async (event) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        } else {
            event.preventDefault();
            setDisabled(true);
            let msg = " You have success please check otp your email id";
            let postData = new FormData();
            for (let key in formData) {
                postData.append(key, formData[key]);
            }
            let resp = await loginWithOtpAction(postData);
            if (resp.code === 200) {
                toast.success(resp.msg || msg);
                setTimeout(() => {
                    navigate("/otp_verification", { state: { email: formData.email } });
                }, 2000);
            } else {
                setDisabled(false);
                toast.error(resp.message || "An error occurred.");
            }
        }
    };

    const handleChange = ({ name, event }) => {
        setFormData({ ...formData, [name]: event.target.value });
    };
    // const gmaillogin = useGoogleLogin({
    //     onSuccess: tokenResponse => console.log(tokenResponse),
    //   });



    const gmaillogin = useGoogleLogin({
        onSuccess: async (credentialResponse) => {
            //   console.log("login success",credentialResponse)
            const accessToken = credentialResponse.access_token;


            try {
                const response = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,

                    },
                });
                //   console.log("user Info"+ JSON.stringify(response.data))
                //   console.log( response.data.name)
                //   console.log( response.data.email)


                localStorage.setItem("user", JSON.stringify(response.data));
                alert(`Welcome, ${response.data.name}!`);
            } catch (error) {
                console.log(error);
            }
        },

        onError: (error) => console.log('Login Failed:', error)
    });

    return (
        <>
            <Row className='justify-content-center mt-4'>
                <Col lg={9} md={9} sm={9} xs={9}>
                    <Row>
                        {/* left start */}
                        <Col lg={6} md={6} sm={12} xs={12} className='leftbgColor p-4'>
                            <Row className='justify-content-center'>
                                <Col lg={12} md={12} sm={12} xs={12} className='text-center m-5'><h6 className='fontWhite'>Lorem ipsum dolor sit amet consectetur.</h6>
                                </Col>
                                {/* <Col lg={6} md={6} sm={6} xs={6} className='text-center'><img src={signUp} height="auto" /></Col> */}
                                <Col lg={12} md={12} sm={12} xs={12} className='text-center'>
                                    <img src={loginimg} style={{ maxWidth: '100%', height: 'auto' }} alt="Sign Up" />
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

                                    <Form className="w-100 px-3 " noValidate validated={validated} onSubmit={handleSubmit}>
                                        <Row className='pt-3'>
                                            <h2 >Sign <span style={{ color: "#4591FF" }}>In</span></h2>
                                            <Form.Group as={Col} md="9" controlId="validationFormik103" className="position-relative">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Enter email"
                                                    value={formData.email || ""}
                                                    onChange={(e) => handleChange({ name: "email", event: e })}
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a valid Email.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Row>
                                        {/* <Row>
                                        <Form.Group as={Col} md="9" className="position-relative mb-3">
                                            <Form.Label> password</Form.Label>
                                            <Form.Control type="password" required name="password" />
                                            <h6 className='text-end'>forget password</h6>
                                        </Form.Group>
                                        </Row> */}

                                        <Row className='mt-3 g-4'>
                                            <Col lg={9} md={9} sm={12} xs={12} className='g-3 position-relative'>
                                                <Button type="submit" disabled={isDisabled} className='px-4 w-100'>LogIn</Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Col>
                                <Col lg={9} md={9} sm={9} xs={9} className="rigthbgColor d-flex flex-column justify-content-center align-items-center position-relative mt-2">
                                    <span> or</span>
                                </Col>
                                <Col lg={9} md={9} sm={9} xs={9} className="rigthbgColor d-flex flex-column justify-content-center align-items-center position-relative mt-2">
                                    <span><img src={google} onClick={() => gmaillogin()} /></span>
                                </Col>

                                <Col lg={9} md={9} sm={9} xs={9} className="rigthbgColor d-flex flex-column justify-content-center align-items-center position-relative mt-2">
                                    <span style={{ fontSize: "small" }}>Don’t have an account?<Link to="/signUp"> Sign Up</Link> </span>
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

export default Signin;