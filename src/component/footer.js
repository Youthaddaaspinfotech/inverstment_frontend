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
              <Col><p>If you're visiting this page, you're likely here because you're searching for a random sentence. Sometimes a random.
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
          {/* first col end */}
          {/* secound col start */}
          <Col lg={2} md={12} sm={12} xs={12} className=''>
            <Row>
              <Col><h5 className='footerheading mb-3'>Our Solution</h5></Col>
            </Row>
            <Row>
              <Col><p>White labelled flows</p></Col>
            </Row>
            <Row>
              <Col><p>No Code Platform</p></Col>
            </Row>
            <Row>
              <Col><p>API</p></Col>
            </Row>
            <Row>
              <Col><p>Marketplace</p></Col>
            </Row>
            <Row>
              <Col><p>Lending</p></Col>
            </Row>
          </Col>
          {/* secound col end */}
          {/* third col start */}
          <Col lg={2} md={12} sm={12} xs={12} className=''>
            <Row>
              <Col><h5 className='footerheading'>Usecase</h5></Col>
            </Row>
            <Row>
              <Col><p>KYC</p></Col>
            </Row>
            <Row>
              <Col><p>Video Verification</p></Col>
            </Row>
            <Row>
              <Col><p>Supplier Due Diligence</p></Col>
            </Row>
            <Row>
              <Col><p>Age Verification</p></Col>
            </Row>
            <Row>
              <Col><p>AML</p></Col>
            </Row>
            <Row>
              <Col><p>Fraud Prevention</p></Col>
            </Row>
            <Row>
              <Col><p>IDV</p></Col>
            </Row>
          </Col>

          {/* third col end */}
          {/* four col start */}
          <Col lg={2} md={12} sm={12} xs={12} className=''>

            <Row>
              <Col><h5 className='footerheading mb-3'>Industrial</h5></Col>
            </Row>
            <Row>
              <Col><p>Financial Services</p></Col>
            </Row>
            <Row>
              <Col><p>Credit Unions</p></Col>
            </Row>
            <Row>
              <Col><p>Banking</p></Col>
            </Row>
            <Row>
              <Col><p>Global Remittance</p></Col>
            </Row>
            <Row>
              <Col><p>Gaming</p></Col>
            </Row>
            <Row>
              <Col><p>Supplier Management</p></Col>
            </Row>
            <Row>
              <Col><p>Sharing Economy</p></Col>
            </Row>
            <Row>
              <Col><p>Home and Vehical Rental</p></Col>
            </Row>
          </Col>
          {/* four col end */}
          {/* five col start */}
          <Col lg={2} md={12} sm={12} xs={12} className=''>
            <Row>
              <Col><h5 className='footerheading mb-3'>Our Company</h5></Col>
            </Row>
            <Row>
              <Col><p>About Us</p></Col>
            </Row>
            <Row>
              <Col><p>Partners</p></Col>
            </Row>
            <Row>
              <Col><p>Media Releases</p></Col>
            </Row>
            <Row>
              <Col><p>Events</p></Col>
            </Row>

          </Col>
          {/* five col end */}
          {/* six col start */}
          <Col lg={2} md={12} sm={12} xs={12} className=''>
            <Row>
              <Col><h5 className='footerheading mb-3'>Resource</h5></Col>
            </Row>
            <Row>
              <Col><p>Blogs</p></Col>
            </Row>
            <Row>
              <Col><p>White Papers & Reports</p></Col>
            </Row>
            <Row>
              <Col><p>Customer Stories</p></Col>
            </Row>
            <Row>
              <Col><p>API Reference Docs</p></Col>
            </Row>

          </Col>
          {/* six col end */}
          {/* secound row start */}

          <Col>
            <Row className='textColor footer2Box d-flex  justify-content-evenly'>
              <Col lg={3} md={3} sm={3} xs={12} className="g-3"><span>Terms of Use</span></Col>
              <Col lg={3} md={3} sm={3} xs={12} className="g-3" ><span>Privacy Policy</span></Col>
              <Col lg={3} md={3} sm={3} xs={12} className="g-3"  ><span>Responsible Disclosure Policy</span></Col>
              <Col lg={3} md={3} sm={3} xs={12} className="g-3"><span>Sitemap</span></Col>
            </Row>
          </Col>
          {/* secound row end */}
        </Row>





      </>

    </>
  )
}

export default Footer