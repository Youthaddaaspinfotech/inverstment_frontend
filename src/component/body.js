import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Navbar, Nav, Card, Button, ProgressBar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs, faCoins, faIndianRupeeSign, faTree, faHouseChimneyCrack, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import target from "../assets/card/card_icon/target.svg.jpg"
import gross from "../assets/card/card_icon/gross_entry.svg.jpg"
import assetsvalue from "../assets/card/card_icon/assets_value.jpg"
import assetstype from "../assets/card/card_icon/asset_type_new.svg.jpg"
import card1 from "../assets/card/caed1.jpg"
import card2 from "../assets/card/card2.jpg"
import card3 from "../assets/card/card3.jpg"
import { Link, useNavigate } from 'react-router-dom';
import { getPropertyAction } from '../actions/admin.actions'
import { imgPath } from '../actions/constant';
const Body = () => {
  const navigate = useNavigate();
  const [dataList, setDataList] = useState([]);
  const [formData, setFormData] = useState({ limit: 10, page: 0, sortName: "createdAt", sortBy: "DESC" });
  const [totalItems, setTotalItems] = useState(0);

  const getDataList = async (action = '') => {

    let data = { ...formData };
    if (action === 'clear') {
      data = { page: 0, limit: 10, sortName: "createdAt", sortBy: "DESC" };
      setFormData(data);
    }
    const resp = await getPropertyAction(data);
    if (resp.code === 200) {
      setDataList(resp.data);
      setFormData({ ...data, ...{ totalItems: resp.count } });
    }
  }
  useEffect(() => {

    getDataList();

  }, [formData.page])
  return (
    <>

      <Row className='justify-content-center mt-4 p-3'>
        <Col lg={9}>
          {/* first navbar start */}
          <Row className="d-flex justify-content-between align-items-center">
            <Col lg={7} md={4} sm={8} xs={8} className="">
              <h4>Properties</h4>
            </Col>
            <Col lg={4} md={4} sm={8} xs={8} className="text-end">
              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search for employee directory"
                  className="searchButton"
                  aria-label="Search"
                />
              </Form> */}
            </Col>
          </Row>
          {/* first navbar end */}
          {/* secound nav bar end */}
          {/* <Row className=''>
            <Col>
              <Navbar collapseOnSelect expand="lg" className="gap-3">
                <Nav.Link href="#features">All</Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto gap-2">
                    <Nav.Link href="#pricing">Open</Nav.Link>
                    <Nav.Link href="#pricing">Fully Funded</Nav.Link>
                    <Nav.Link href="#pricing">Exited</Nav.Link>
                    <Nav.Link href="#pricing">Resale</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row> */}
          {/* secound nav bar end */}
          {/* card section start */}

          <Row className="mb-2">
            {dataList && dataList.length > 0 ? (
              dataList.map((val, ind) => (
                <Col lg={4} md={6} sm={12} xs={12} className='g-3' >
                  {/* <Link to="/pr_detail_page"> */}
                  <Row onClick={(e) => navigate('/pr_detail_page', { state: { propertyData: val } })}>
                    <Col lg={12} className="cardContainer">
                      <Card.Img variant="top" src={imgPath(val.image)} className="cardImg p-3" />
                      <span className="btn21"><FontAwesomeIcon icon={faLocationDot} style={{ "color": "blue" }} /> {val.location}</span>
                    </Col>
                  </Row>
                  {/* </Link> */}
                  <Card className='p-2 cardBody'>
                    <Card.Body className=''>
                      <Card.Title>{val.name}</Card.Title>
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
                          {/* <Link to={{ pathname: "/pr_detail_page", state: { propertyData: val } }}> */}
                          <Button variant="primary" className="cardbtn investbtn w-100" onClick={(e) => navigate('/pr_detail_page', { state: { propertyData: val } })}>Invest Now</Button>
                          {/* </Link> */}
                        </Col>
                        <Col lg={12} md={12} sm={12} xs={12} className="g-2">
                          {/* <Link to="/pr_detail_page"  > */}
                          <Button variant="light" className="border border-primary cardbtn w-100" onClick={(e) => navigate('/pr_detail_page', { state: { propertyData: val } })}>View Details</Button>
                          {/* </Link> */}
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Col>
                <h5 className="text-center">No properties available at the moment.</h5>
              </Col>
            )}
          </Row>
          <Row className='text-center mt-4'>
            {/* <Col><Button style={{ "backgroundColor": " #4590FE" }}>Load More</Button></Col> */}
          </Row>
          {/* card section end */}
        </Col>
      </Row>


    </>
  )
}

export default Body