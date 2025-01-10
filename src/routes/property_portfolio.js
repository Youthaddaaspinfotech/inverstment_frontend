import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Navbar, Nav, Card, Button, ProgressBar, Tab, Tabs } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs, faCoins, faIndianRupeeSign, faTree, faHouseChimneyCrack, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import target from "../assets/card/card_icon/target.svg.jpg"
import gross from "../assets/card/card_icon/gross_entry.svg.jpg"
import assetsvalue from "../assets/card/card_icon/assets_value.jpg"
import assetstype from "../assets/card/card_icon/asset_type_new.svg.jpg"
import card1 from "../assets/card/caed1.jpg"
import card2 from "../assets/card/card2.jpg"
import card3 from "../assets/card/card3.jpg"
import { Link } from 'react-router-dom';
import Get_in_touch from '../component/get_in_touch';
import { getUserPortfolioAction } from '../actions/admin.actions';

const Property_portfolio = () => {
  const [key, setKey] = useState("invested");
  const [portfolioListDeta, setPortfolioList] = useState([]);


  const getData = async () => {
    let resp = await getUserPortfolioAction({});
    if (resp.code === 200) {
      setPortfolioList(resp.data)
    }
  }

  // let propertyName = "";
  // if (portfolioListDeta && portfolioListDeta.length > 0 && portfolioListDeta[0].propertyDocs && portfolioListDeta[0].propertyDocs.length > 0) {
  //   propertyName = portfolioListDeta[0].propertyDocs[0].name;
  // }
  useEffect(() => {
    getData();
  }, [])
  return (
    <>
      {/* <Row className='justify-content-center mt-4 p-3'>
        <Col lg={9}>
          <Row className='text-center'>
            <Col><h1 className='portfolio_heading'>Property Portfolio</h1></Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={4} md={4} sm={8} xs={8} className="text-center">
              <div className="underline-container">
                <span>Invested</span>
                <span>Pending</span>
              </div>
            </Col>
          </Row>
          <Row className='mb-2'>
            <Col lg={4} md={6} sm={12} xs={12} className='g-3' >
              <Link to="/pr_detail_page">
                <Row>
                  <Col lg={12} className="cardContainer">
                    <Card.Img variant="top" src={card1} className="cardImg p-3" />
                    <span className="btn21"><FontAwesomeIcon icon={faLocationDot} style={{ "color": "blue" }} /> indore</span>
                  </Col>
                </Row>
              </Link>
              <Card className='p-2 cardBody'>
                <Card.Body className=''>
                  <Card.Title>Pune Industrial Opportunity</Card.Title>
                  <Row>
                    <Col lg={1} md={1} sm={1} xs={1}><img src={target} className='mt-2' /></Col>
                    <Col className='cartFont'>Target IRR<br /><span className='cardblue'>13%</span></Col>
                    <Col lg={1} md={1} sm={1} xs={1}><img src={gross} className='mt-2' /></Col>
                    <Col className='cartFont'>Grass Entry yield <br /><span className='cardblue'>8.1%</span></Col>
                  </Row>
                  <Row>
                    <Col lg={1} md={1} sm={1} xs={1}><img src={assetsvalue} className='mt-2' /></Col>
                    <Col className='cartFont'>Asset Value<br /><span className='cardblue'>39.20Cr</span></Col>
                    <Col lg={1} md={1} sm={1} xs={1}><img src={assetstype} className='mt-2' /></Col>
                    <Col className='cartFont'>Asset Type<br /><span className='cardblue'>Industrial</span></Col>
                  </Row>
                  <Row className='mt-2'>
                    <Col lg={12} className='text-end progressbarfont'>95% Funded</Col>
                    <Col><ProgressBar variant="success" className='progressbar' now={95} /></Col>
                  </Row>
                  <Row className="mt-3">
                    <Col lg={12} md={12} sm={12} xs={12} className="g-2">
                      <Link to="pr_detail_page">
                        <Button variant="primary" className="cardbtn investbtn w-100">Invest Now</Button>
                      </Link>
                    </Col>

                    <Col lg={12} md={12} sm={12} xs={12} className="g-2">
                      <Link to="pr_detail_page">
                        <Button variant="light" className="border border-primary cardbtn w-100">View Details</Button>
                      </Link>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row> */}
      <Row className="justify-content-center mt-4 p-3">
        <Col lg={9}>
          <Row className="text-center">
            <Col>
              <h1 className="portfolio_heading">Property Portfolio</h1>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={12}>
              <Tabs
                id="portfolio-tabs"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 custom-tabs justify-content-center mt-5"
              >
                <Tab eventKey="invested" title="Invested">
                  {/* <div className="tab-content">Invested Content</div> */}

                  <Row className='mb-2'>
                    {portfolioListDeta.map((property, index) => {
                      const propertyName = property.propertyDocs && property.propertyDocs[0] ? property.propertyDocs[0].name : 'Property Name Not Available';

                      return (
                        <Col lg={4} md={6} sm={12} xs={12} className='g-3' >
                          <Link to="/pr_detail_page">
                            <Row>
                              <Col lg={12} className="cardContainer">
                                <Card.Img variant="top" src={card1} className="cardImg p-3" />
                                <span className="btn21"><FontAwesomeIcon icon={faLocationDot} style={{ "color": "blue" }} /> indore</span>
                              </Col>
                            </Row>
                          </Link>
                          <Card className='p-2 cardBody'>
                            <Card.Body className=''>
                              <Card.Title>{propertyName}</Card.Title>
                              <Row>
                                <Col lg={1} md={1} sm={1} xs={1}><img src={target} className='mt-2' /></Col>
                                <Col className='cartFont'>Target IRR<br /><span className='cardblue'>13%</span></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><img src={gross} className='mt-2' /></Col>
                                <Col className='cartFont'>Grass Entry yield <br /><span className='cardblue'>8.1%</span></Col>
                              </Row>
                              <Row>
                                <Col lg={1} md={1} sm={1} xs={1}><img src={assetsvalue} className='mt-2' /></Col>
                                <Col className='cartFont'>Asset Value<br /><span className='cardblue'>39.20Cr</span></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><img src={assetstype} className='mt-2' /></Col>
                                <Col className='cartFont'>Asset Type<br /><span className='cardblue'>Industrial</span></Col>
                              </Row>
                              <Row className='mt-2'>
                                <Col lg={12} className='text-end progressbarfont'>95% Funded</Col>
                                <Col><ProgressBar variant="success" className='progressbar' now={95} /></Col>
                              </Row>
                              {/* <Row className="mt-3">
                            <Col lg={12} md={12} sm={12} xs={12} className="g-2">
                              <Link to="pr_detail_page">
                                <Button variant="primary" className="cardbtn investbtn w-100">Invest Now</Button>
                              </Link>
                            </Col>

                            <Col lg={12} md={12} sm={12} xs={12} className="g-2">
                              <Link to="pr_detail_page">
                                <Button variant="light" className="border border-primary cardbtn w-100">View Details</Button>
                              </Link>
                            </Col>
                          </Row> */}
                            </Card.Body>
                          </Card>
                        </Col>
                      );
                    })}
                    {/* <Col lg={4} md={6} sm={12} xs={12} className='g-3' >
                      <Link to="/pr_detail_page">
                        <Row>
                          <Col lg={12} className="cardContainer">
                            <Card.Img variant="top" src={card1} className="cardImg p-3" />
                            <span className="btn21"><FontAwesomeIcon icon={faLocationDot} style={{ "color": "blue" }} /> indore</span>
                          </Col>
                        </Row>
                      </Link>
                      <Card className='p-2 cardBody'>
                        <Card.Body className=''>
                          <Card.Title>Pune Industrial Opportunity</Card.Title>
                          <Row>
                            <Col lg={1} md={1} sm={1} xs={1}><img src={target} className='mt-2' /></Col>
                            <Col className='cartFont'>Target IRR<br /><span className='cardblue'>13%</span></Col>
                            <Col lg={1} md={1} sm={1} xs={1}><img src={gross} className='mt-2' /></Col>
                            <Col className='cartFont'>Grass Entry yield <br /><span className='cardblue'>8.1%</span></Col>
                          </Row>
                          <Row>
                            <Col lg={1} md={1} sm={1} xs={1}><img src={assetsvalue} className='mt-2' /></Col>
                            <Col className='cartFont'>Asset Value<br /><span className='cardblue'>39.20Cr</span></Col>
                            <Col lg={1} md={1} sm={1} xs={1}><img src={assetstype} className='mt-2' /></Col>
                            <Col className='cartFont'>Asset Type<br /><span className='cardblue'>Industrial</span></Col>
                          </Row>
                          <Row className='mt-2'>
                            <Col lg={12} className='text-end progressbarfont'>95% Funded</Col>
                            <Col><ProgressBar variant="success" className='progressbar' now={95} /></Col>
                          </Row>
                          <Row className="mt-3">
                            <Col lg={12} md={12} sm={12} xs={12} className="g-2">
                              <Link to="pr_detail_page">
                                <Button variant="primary" className="cardbtn investbtn w-100">Invest Now</Button>
                              </Link>
                            </Col>

                            <Col lg={12} md={12} sm={12} xs={12} className="g-2">
                              <Link to="pr_detail_page">
                                <Button variant="light" className="border border-primary cardbtn w-100">View Details</Button>
                              </Link>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Col> */}
                  </Row>
                </Tab>
                <Tab eventKey="pending" title="Pending">
                  <div className="tab-content">Pending Content</div>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Get_in_touch />
        </Col>
      </Row>



    </>
  )
}

export default Property_portfolio