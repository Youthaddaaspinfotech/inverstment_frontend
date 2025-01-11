import React from 'react'
import logo from "../assets/body/logo.png";
import { Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <>
        <Row className='footerBox  textColor p-5'>

          {/* first col start */}
          <Col lg={2} md={12} sm={12} xs={12} className=' '>
            <Row>
              <Col><img src={logo} className='logoImg mb-2' /></Col>
            </Row>
            <Row >
              <Col><p>Real estate is the closest thing to a proverbial 'get rich quick' scheme.
              </p></Col>
            </Row>
            <Row>
              <Col lg={12} md={12} sm={12} xs={12}><p>Conect with us</p></Col>
              <Col lg={1} md={1} sm={1} xs={1}><FontAwesomeIcon icon={faLinkedin} style={{ color: "#e8eaed", }} /></Col>
              <Col lg={1} md={1} sm={1} xs={1}><FontAwesomeIcon icon={faFacebook} style={{ color: "#e8eaed", }} /></Col>
              <Col lg={1} md={1} sm={1} xs={1}><FontAwesomeIcon icon={faXTwitter} style={{ color: "#e8eaed", }} /></Col>
              <Col lg={1} md={1} sm={1} xs={1}><FontAwesomeIcon icon={faInstagram} style={{ color: "#f1f4f8", }} /></Col>


            </Row>
          </Col>

          <Col lg={6} md={12} sm={12} xs={12} className='mt-4 pt-4'>
            <Row>
              <Col><h5 className='footerheading mb-3'>Our Company</h5></Col>
            </Row>
            <Row>
              <Col><p><span className='hand'>About Us</span></p></Col>
            </Row>
            <Row>
              <Col><p><span className='hand'>Our Policy</span></p></Col>
            </Row>
            <Row>
              <Col><p><span className='hand'>Media Releases</span></p></Col>
            </Row>
            <Row>
              <Col><p><span className='hand'>Contact Us</span></p></Col>
            </Row>

          </Col>

          <Col lg={4} md={12} sm={12} xs={12} className='mt-4 pt-3'>
            <h5 className='mb-0 pb-0'>Contact Info</h5>
            <Row className='textColor footer2Box d-flex  justify-content-evenly'>
              <Col lg={12} md={12} sm={12} xs={12}>
                <Row className='mt-2 mb-2'>
                  <Col lg={4} md={4} sm={4} xs={4}>Address : </Col>
                  <Col lg={8} md={8} sm={8} xs={8}>5-TY/1-ATV Old Palasia Opposite Jockey Showroom, Ashok Nagar, Indore, Madhya Pradesh 452001</Col>
                </Row>
                <Row className='mt-2 mb-2'>
                  <Col lg={4} md={4} sm={4} xs={4}>Phone : </Col>
                  <Col lg={8} md={8} sm={8} xs={8}>
                    <a href="tel:+919998887776" style={{color:"#ffffff"}}> +91-9998887776</a> ||
                    <a href="tel:+918887776665" style={{color:"#ffffff"}}> +918887776665</a>
                  </Col>
                </Row>
                <Row className='mt-2 mb-2'>
                  <Col lg={4} md={4} sm={4} xs={4}>E-mail : </Col>
                  <Col lg={8} md={8} sm={8} xs={8}>info@jagannathgrop.co.in</Col>
                </Row>
              </Col>
            </Row>
          </Col>
          {/* secound row end */}
        </Row>





      </>

    </>
  )
}

export default Footer