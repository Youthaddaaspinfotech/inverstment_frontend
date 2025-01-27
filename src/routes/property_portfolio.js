import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Navbar, Nav, Card, Button, ProgressBar, Tab, Tabs } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs, faCoins, faIndianRupeeSign, faTree, faHouseChimneyCrack, faLocationDot, faCircleCheck, faClock } from '@fortawesome/free-solid-svg-icons';
import target from "../assets/card/card_icon/target.svg.jpg"
import gross from "../assets/card/card_icon/gross_entry.svg.jpg"
import assetsvalue from "../assets/card/card_icon/assets_value.jpg"
import assetstype from "../assets/card/card_icon/asset_type_new.svg.jpg"
import card1 from "../assets/card/caed1.jpg"
import card2 from "../assets/card/card2.jpg"
import card3 from "../assets/card/card3.jpg"
import { Link, useNavigate } from 'react-router-dom';
import Get_in_touch from '../component/get_in_touch';
import { getUserPortfolioAction } from '../actions/admin.actions';

const Property_portfolio = () => {
  const [key, setKey] = useState("invested");
  const [portfolioListDeta, setPortfolioList] = useState([]);
  const navigate = useNavigate();


  const getData = async () => {
    let resp = await getUserPortfolioAction({});
    if (resp.code === 200) {
      setPortfolioList(resp.data)
    }
  }


  useEffect(() => {
    getData();
  }, [])
  return (
    <>
      <Row className="justify-content-center mt-4 p-3">
        <Col lg={9}>
          <Row className="text-center">
            <Col>
              <h5 className="portfolio_heading">My - Portfolio</h5>
            </Col>
          </Row>
          <Row className="justify-content-center mt-4">
            <Col lg={12}>
              <Row className='mb-2'>
                {portfolioListDeta.map((property, index) => {
                  const propertyName = property.propertyDocs && property.propertyDocs[0] ? property.propertyDocs[0].name : 'Property Name Not Available';

                  console.log(property)

                  return (
                    <Col lg={4} md={6} sm={12} xs={12} className='g-3' >
                      <Row>
                        <Col lg={12} className="cardContainer">
                          <Card.Img variant="top" src={card1} className="cardImg p-3" onClick={() => {
                            navigate('/investmentdetails', { state: property });
                          }} />
                          <span className="btn21"><FontAwesomeIcon icon={faLocationDot} style={{ "color": "blue" }} />{property?.propertyDocs?.[0]?.location}</span>
                        </Col>
                      </Row>
                      <Card className='p-2 cardBody' onClick={() => {
                        navigate('/investmentdetails', { state: property });
                      }}>
                        <Card.Body className=''>
                          <Card.Title>{propertyName}</Card.Title>
                          <Row>
                            <Col lg={1} md={1} sm={1} xs={1}><img src={target} className='mt-2' /></Col>
                            <Col className='cartFont'>ROI<br /><span className='cardblue'>{property.interestRate}</span></Col>
                            <Col lg={1} md={1} sm={1} xs={1}></Col>
                            <Col className="cartFont">
                              Status <br />
                              <span className="cardblue">
                                {property?.receivedStatus === "Pending" ? (
                                  <>
                                    Pending{" "}
                                    <FontAwesomeIcon
                                      icon={faClock}
                                      size="lg"
                                      spin
                                      style={{ color: "#ed840c" }}
                                    />
                                  </>
                                ) : (
                                  <>
                                    Aproved{" "}
                                    <FontAwesomeIcon
                                      beat
                                      icon={faCircleCheck}
                                      size="lg"
                                      style={{ color: "#19f01c" }}
                                    />
                                  </>
                                )}
                              </span>
                            </Col>

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
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
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




