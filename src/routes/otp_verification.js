import React, { useState } from 'react'
import { Row, Col, Form, Button} from "react-bootstrap";
import login from "../assets/body/login.jpg"
import logo from "../assets/body/logo.png"
import OtpInput from "react-otp-input"
import verification from "../assets/body/otp_verification.jpg";

const Otp_verification = (props) => {
  const [formData, setFormData] = useState({ otp: '', email: props.email });

  const handelChange = (name, event) => {
    let newForm = { ...formData };
    if (name === 'otp') {
      newForm[name]=event
    } else {
      newForm[name] = event.target.value;

    }

    let emailId = {email:props.email}

    setFormData({ ...formData, ...newForm,...emailId });
  }
  return (
    <>
      <Row className='justify-content-center mt-5'>
        <Col lg={10} md={10} sm={10} xs={10}>
          <Row>
            {/* left start */}
            <Col lg={6} md={6} sm={12} xs={12} className='leftbgColor p-4'>
              <Row className='justify-content-center'>
                <Col lg={12} md={12} sm={12} xs={12} className='text-center m-5'><h6 className='fontWhite'>Lorem ipsum dolor sit amet consectetur.</h6>
                </Col>
                {/* <Col lg={6} md={6} sm={6} xs={6} className='text-center'><img src={signUp} height="auto" /></Col> */}
                <Col lg={12} md={12} sm={12} xs={12} className='text-center'>
                  <img src={verification} style={{ maxWidth: '100%', height: 'auto' }} alt="Sign Up" />
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
                <Col className="d-flex justify-content-center align-items-center pt-5 ">

                  <Form className="w-100 px-3 ">
                    <Row className='pt-3'>
                      <Col> <h2 >OTP <span style={{ color: "#4591FF" }}>Verification</span></h2></Col>
                      <Col lg={12} md={12} sm={12} xs={12}> <p style={{ fontSize: "small", fontWeight: "bold" }} className='mt-2'>Please enter OTP shared on your email <span style={{ color: " #4691FF" }}> Change Email ID</span></p></Col>
                      <Row>
                        <Col lg={12} md={12} sm={12} xs={12} className='me-1'>
                        <OtpInput
                        value={formData.otp ? formData.otp : ''}
                        onChange={(e) => { handelChange('otp', e) }}
                        numInputs={6}
                        renderSeparator={<span>-</span>}
                        renderInput={(props) => <input {...props} />}
                        inputStyle={{ width: 40 }}
                      />
                        </Col>
                      </Row>
                   
                      <Row>
                        <Col lg={9} md={9} sm={9} xs={9} className="">
                          <span style={{ color: " #4691FF" }}>Resend OTP</span> <span>in 00:00</span>
                        </Col>
                      </Row>

                    </Row>

                    <Row className='mt-3 g-4'>
                      <Col lg={9} md={9} sm={9} xs={9} className='g-3'>
                        <Button type="submit" className='px-4'>verify</Button>
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

export default Otp_verification;