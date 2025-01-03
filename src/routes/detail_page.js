import React from 'react'
import { Row, Col, Card, Button, Form,DropdownButton, Dropdown, ProgressBar } from "react-bootstrap"
import { Link } from 'react-router-dom';
import detailImg from "../assets/detail_page/detailImg.jpg"
import location from "../assets/card/card_icon/location.png";
import target from "../assets/card/card_icon/target.svg.jpg"
import assetvalue from "../assets/card/card_icon/assets_value.jpg"
import gross from "../assets/card/card_icon/gross_entry.svg.jpg"
import assetstype from "../assets/card/card_icon/asset_type_new.svg.jpg"
import inlocation from "../assets/card/card_icon/in_location.png"
import worldClass from "../assets/card/card_icon/world_class.png"
import unused from "../assets/card/card_icon/unused.png"
const Pr_detail_page = () => {
  return (
    <>
      <Row className='justify-content-center mt-4 '>
        <Col lg={10} md={10} sm={10} xs={10}>
          <Row className='justify-content-center'>
            <Col lg={12}>
              <Card className='cardborderimg'>
                <Card.Img src={detailImg} className='detailimg' />
              </Card>
            </Col>
          </Row>

          <Row className='p-2'>
            <Col lg={3} md={3} sm={6} xs={6} className='g-1'>
              <Card>
                <Card.Img src={detailImg} />
              </Card>
            </Col>
            <Col lg={3} md={3} sm={6} xs={6} className='g-1'>
              <Card>
                <Card.Img src={detailImg} />
              </Card>
            </Col>
            <Col lg={3} md={3} sm={6} xs={6} className='g-1'>
              <Card>
                <Card.Img src={detailImg} />
              </Card>
            </Col>
            <Col lg={3} md={3} sm={6} xs={6} className='g-1'>
              <Card>
                <Card.Img src={detailImg} />
              </Card>
            </Col>

          </Row>
     <Row>
  <Col>
    <Card className="cardborder p-3">
      <Card.Body>
        <Card.Title>Investment</Card.Title>
        <Card.Text>
          Please insert investment amount and toggle with appreciation tenure
        </Card.Text>
        <Row>
          {/* Capital Section */}
          <Col lg={6} md={6} sm={12} xs={12} className="mb-3">
            <Row className="justify-content-start">
              <Col className="text-start">
                <span className="fontsize">
                  Capital<span style={{ color: "red" }}>*</span>
                </span>
              </Col>
            </Row>
            <Row>
              <Col className="text-start">
                <Form.Control
                  type="text"
                  style={{ width: "40%" }}
                  placeholder="&#8377; 30,00,000"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                />
              </Col>
            </Row>
            <Row>
              <Col className="text-start">
                <span className="fontsize">Validation Text</span>
              </Col>
            </Row>
          </Col>
{/* <Col lg={6}></Col> */}
          {/* Tenure Section - Separate rows for label and dropdown */}
          <Col lg={6} md={6} sm={12} xs={12} className="mb-3">
            {/* Tenure Label */}
            <Row className="justify-content-start">
              <Col className="text-start">
                <span className="fontsize">
                  Tenure<span style={{ color: "red" }}>*</span>
                </span>
              </Col>
            </Row>

            {/* Tenure Dropdown */}
            <Row className='justify-content-end'>
              <Col className="text-start">
                <Form.Select className=''
                  style={{ width: "60%" }}
                  aria-label="Default select example"
                >
                  <option>Placeholder</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  </Col>
</Row>







          <Row className='mt-4 '>
            <Col>
              <Card className="cardborder p-3">

                <Card.Body>
                  <Card.Title><h3 style={{ color: "#4590FE" }}>Pune Industrial Opportunity -1</h3>
                    <h6><img src={location} className='mb-1' />Hinjewadi 79,845 sqft</h6>

                    <Button variant="success" className='greenbtn'>Success</Button>
                  </Card.Title>

                  <Card.Text>
                    <Row className=''>
                      <Col className='text-start'><img src={target} /><span className='fontsize ms-1'>Target IRR</span></Col>
                      <Col className='text-end textblue'>13%</Col>
                    </Row>
                    <Row className='mt-3'>
                      <Col className='text-start'><img src={assetvalue} /><span className='fontsize ms-1'>Asset Value</span></Col>
                      <Col className='text-end textblue'>&#8377;39.20Cr</Col>
                    </Row>
                    <Row className=' mt-3'>
                      <Col className='text-start'><img src={gross} /><span className='fontsize ms-1 ' >Gross Entry Yiels</span></Col>
                      <Col className='text-end textblue'>8.1%</Col>
                    </Row>
                    <Row className='mt-3'>
                      <Col className='text-start'><img src={assetstype} /><span className='fontsize ms-1'>Asset Type</span></Col>
                      <Col className='text-end textblue'>Industrial</Col>
                    </Row>
                    <Row className='mt-3'>
                      <Col lg={12} className='text-end progressbarfont'>95% Funded</Col>
                      <Col><ProgressBar variant="success" className='progressbar' now={95} /></Col>
                    </Row>
                  </Card.Text>

                  <div className="d-flex justify-content-center">
                    <Link to="/pay_using_details"><Button variant="primary">Invest Now</Button></Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className='mt-4'>
            <Col>

              <Card className="cardborder p-3">

                <Card.Body>
                  <Card.Title><h3>Investment Thesis</h3></Card.Title>
                  <Card.Text>
                    <Row>
                      <Col><img src={inlocation} /> <span className='textblue'>In-Demand Location</span>
                        <p>Abundant land for Potential construction along with IT SEZ,IT parks, manunfacturing.and budget housing options.</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col><img src={worldClass} /><span className='textblue ms-2'>World-Class Tenant</span>
                        <p>The tenant is a leading gloabal manufacture of precision-engineered and effcirnt centrifugal pumps and compressors with a strong presence America,Europe,and Asia.</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col><img src={unused} /> <span className='textblue ms-2'>Unused FSI</span>
                        <p>The investment opportunity offers 9.4% returs from 1x of FSI,while the potential was to build 4.5x.</p>
                      </Col>
                    </Row>
                  </Card.Text>

                </Card.Body>
              </Card>

            </Col>
          </Row>

          <Row className='mt-4'>
            <Col>
              <Card className="cardborder p-3">

                <Card.Body>
                  <Card.Title><h4>Overview</h4></Card.Title>
                  <Card.Text>
                    <Row>
                      <Col>
                        <p>This is an opportunity to invest in 79,845 sqft,of an industrial facility In the fast-growing Hinjewadi Phase ||| of Pune. The vicinit comproses multiple top-tier multinational clients making it a good investment option.</p>

                        <p>The opportunity is valued at INR 39.2 Cr. and the tenant is a leading manufacturer of precision pumps, compressors, and accessories.</p>
                        <p>With high yields, long lease terms, location, and a world-class tenant, the asset makes for a compelling investment opportunity.</p>
                      </Col>
                    </Row>
                  </Card.Text>

                </Card.Body>
              </Card>

            </Col>
          </Row>



        </Col>
      </Row>

    </>
  )
}

export default Pr_detail_page