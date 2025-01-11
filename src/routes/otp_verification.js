import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import login from "../assets/body/login.jpg";
import logo from "../assets/body/logo.png";
import OtpInput from "react-otp-input";
import verification from "../assets/body/otp_verification.jpg";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Keep only useNavigate
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { verifyOtpAction } from '../actions/admin.actions';

const Otp_verification = () => {
  const [formData, setFormData] = useState({});
  const [validated, setValidated] = useState(false);
  const location = useLocation();
  let navigate = useNavigate();
  const { email } = location.state || {};
  const [countdown, setCountdown] = useState(120);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    let otpString = String(formData.otp);

    setFormData({ ...formData, otp: otpString });

    const resp = await verifyOtpAction({ email, otp: otpString });
    if (resp.code === 200) {
      localStorage.setItem("loginData", JSON.stringify(true));
      // localStorage.setItem("userType", resp.data.userType);
      localStorage.setItem("authorization", resp.token);
      toast.success(resp.msg);
      localStorage.setItem("loginType", "user");
      localStorage.setItem("status", JSON.stringify(resp.data.status));
      localStorage.setItem("userData",JSON.stringify(resp.data));
      window.location.href = "/"
    } else {
      toast.error(resp.msg || "Invalid OTP");
    }
  };

  const handelChange = (name, event) => {
    let newForm = { ...formData };
    if (name === 'otp') {
      newForm[name] = event;
    } else {
      newForm[name] = event.target.value;
    }
    setFormData({ ...formData, ...newForm });
  };

  useEffect(() => {
    // Decrease the countdown every second
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer); // Stop the countdown once it reaches 0
          // Navigate to '/login' with the email state
          navigate('/signin', { state: { email } });
        }
        return prev - 1;
      });
    }, 1000); // 1-second interval

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [navigate, email]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <Row className="justify-content-center mt-5">
      <Col lg={11} md={11} sm={11} xs={11}>
        <Row>
          {/* Left side */}
          <Col lg={6} md={6} sm={12} xs={12} className="leftbgColor p-4 d-none  d-sm-block">
            <Row className="justify-content-center">
              <Col lg={12} md={12} sm={12} xs={12} className="text-center m-5">
                <h6 className="fontWhite">Secure your account by verifying the <span style={{ color: "black" }}>OTP</span> sent to you.</h6>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12} className="text-center">
                <img src={verification} style={{ maxWidth: '100%', height: 'auto' }} alt="Sign Up" />
              </Col>
            </Row>
          </Col>

          {/* Right side */}
          <Col lg={6} md={6} sm={12} xs={12} className="rigthbgColor p-2">
            <Row>
              <Col lg={12} md={12} sm={12} xs={12} className="d-flex justify-content-end align-items-start">
                <img src={logo} className="logoImg" alt="Logo" />
              </Col>
              <Col className="d-flex justify-content-center align-items-center pt-5">
                <Form noValidate validated={validated} onSubmit={handleSubmit} className="w-100 px-3">
                  <Row className="pt-3">
                    <Col><h2>OTP <span style={{ color: "#4591FF" }}>Verification</span></h2></Col>
                    <Col lg={12} md={12} sm={12} xs={12}>
                      <p style={{ fontSize: "small", fontWeight: "bold" }} className="mt-2">
                        Please enter OTP shared on your email <span style={{ color: "#4691FF" }}> <span className='hand' onClick={(e)=>{navigate('/signin')}}>Change Email ID</span></span>
                      </p>
                    </Col>
                    <Row>
                      <Col lg={12} md={12} sm={12} xs={12} className="me-1">
                        <OtpInput
                          value={formData.otp ? formData.otp : ''}
                          onChange={(e) => { handelChange('otp', e) }}
                          numInputs={6}
                          renderSeparator={<span></span>}
                          renderInput={(props) => <input {...props} />}
                          inputStyle={{
                            width: 40, height: 40, borderRadius: '8px', margin: '0 5px', border: '1px solid #888888'
                          }}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid OTP.
                        </Form.Control.Feedback>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={9} md={9} sm={9} xs={9}>
                        <span style={{ color: "#4691FF" }}>Resend OTP</span> <span>in {formatTime(countdown)}</span>
                      </Col>
                    </Row>
                  </Row>

                  <Row className="mt-3 g-4">
                    <Col lg={9} md={9} sm={9} xs={9} className="g-3">
                      <Button type="submit" className="px-4">Verify</Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Otp_verification;