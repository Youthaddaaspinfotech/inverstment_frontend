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
                localStorage.setItem("userLoginId", resp.data._id);
                toast.success(resp.msg || msg);
                navigate("/otp_verification", { state: { email: formData.email } });

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
              <Row className='justify-content-center align-items-center' style={{ height: '100vh'}}>
                <Col lg={9} md={10} sm={11} xs={11}>
                    <Row className=''>
                        {/* left start */}
                        <Col lg={6} md={6} sm={12} xs={12} className='leftbgColor p-2 d-none  d-sm-block'>
                            <Row className='justify-content-center'>
                                <Col lg={12} md={12} sm={12} xs={12} className='text-center m-2'><h6 className='fontWhite'>"Your gateway to unlocking exclusive property deals."

                                </h6>
                                </Col>
                              
                                <Col lg={12} md={12} sm={12} xs={12} className='text-center '>
                                    <img src={loginimg} style={{ maxWidth: '100%', height: 'auto' }} alt="Sign Up" />
                                </Col>
                            </Row>
                        </Col>

                        {/* left end */}
                        {/* rigth start */}
                        <Col lg={6} md={6} sm={12} xs={12} className='rigthbgColor p-2'>
                            <Row>
                                <Col lg={12} md={12} sm={12} xs={12} className="d-flex justify-content-end align-items-start">
                                    <img src={logo} className="logoImg" alt="Logo" />
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12} >
                                <Form className="w-100" noValidate validated={validated} onSubmit={handleSubmit} >
                                        <Row className='justify-content-center p-3'>
                                          
                                            <Form.Group as={Col} md="9" controlId="validationFormik103" className="position-relative">
                                            <Col lg={12} md={12} sm={12} xs={12}><h2>Sign <span style={{ color: "#4591FF" }}>In</span></h2></Col>  
                                                <Form.Label className='mt-2'>Email</Form.Label>
                                                <Form.Control className='mt-3 mb-3'
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
                                            <Col lg={9} md={9} sm={12} xs={12} className='g-4 position-relative mt-3'>
                                                <Button type="submit" disabled={isDisabled} className=' w-100'>LogIn</Button>
                                            </Col>
                                        </Row>
                                      
                                    </Form>

                                </Col>
                                <Row className='justify-content-center'>
                                <Col lg={9} md={9} sm={9} xs={9}  className="rigthbgColor d-flex  justify-content-center align-items-center mt-2">
                                    <span> or</span>
                                </Col>
                                <Col lg={9} md={9} sm={9} xs={9}  className="rigthbgColor d-flex  justify-content-center align-items-center mt-3">
                                    <span><img src={google} onClick={() => gmaillogin()} /></span>
                                </Col>

                                <Col lg={9} md={9} sm={9} xs={9}   className="rigthbgColor d-flex  justify-content-center align-items-center mt-3">
                                    <span style={{ fontSize: "small" }}>Don’t have an account?<Link to="/signUp"> Sign Up</Link> </span>
                                </Col>
                               
                                </Row>
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