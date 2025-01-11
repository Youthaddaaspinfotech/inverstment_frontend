import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Button, Form, DropdownButton, Dropdown, ProgressBar } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom';
import detailImg from "../assets/detail_page/detailImg.jpg"
import locationImg from "../assets/card/card_icon/location.png";
import target from "../assets/card/card_icon/target.svg.jpg"
import assetvalue from "../assets/card/card_icon/assets_value.jpg"
import gross from "../assets/card/card_icon/gross_entry.svg.jpg"
import assetstype from "../assets/card/card_icon/asset_type_new.svg.jpg"
import inlocation from "../assets/card/card_icon/in_location.png"
import worldClass from "../assets/card/card_icon/world_class.png"
import unused from "../assets/card/card_icon/unused.png"
import { useLocation } from 'react-router-dom';
import { imgPath } from '../actions/constant';
import { getTenureAction } from '../actions/admin.actions';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { addEditPortfolioAction } from '../actions/admin.actions';

const Pr_detail_page = () => {
  const location = useLocation();
  let navigate = useNavigate();
  const propertyData = location.state?.propertyData;


  const [tenureList, setTenureList] = useState([]);
  const [isDisabled, setDisabled] = useState(false);
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    amount: "",
    tenureId: "",
  });

  const getTenureData = async () => {
    let resp = await getTenureAction({});
    if (resp.code === 200) {
      setTenureList(resp.data)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const form = event.currentTarget;
  
    // Check validity of the form
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      setDisabled(true);
  
      // Convert formData into a plain object
      const postData = {};
      for (let key in formData) {
        postData[key] = formData[key];
      }
  
      // Add additional fields to the object
      postData.propertyId = propertyData._id;
      postData.userId = localStorage.getItem("userLoginId");
  
      // Pass plain object through navigate
      navigate("/pay_using_details", {
        state: { formData: postData, homeData : propertyData },
      });
    }
  };
  


  const handleChange = (name, event) => {
    setFormData({ ...formData, [name]: event.target.value });
  };
  useEffect(() => {
    getTenureData();
  }, [])
  return (
    <>
      <Row className='justify-content-center mt-4 '>
        <Col lg={10} md={10} sm={10} xs={10}>
          <Row className='justify-content-center'>
            <Col lg={12}>
              <Card className='cardborderimg'>
                {/* <Card.Img src={detailImg} className='detailimg' /> */}
                <Card.Img src={imgPath(propertyData?.image)} className='detailimg' />
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
                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="align-items-center">
                      {/* Capital Section */}
                      <Col lg={3} md={12} sm={12} xs={12} className="mb-3">
                        <Form.Group>
                          <Form.Label className="fontsize">
                            Capital<span style={{ color: "red" }}>*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="₹ 30,00,000"
                            name="capital"
                            autoComplete="off"
                            value={formData.amount ? formData.amount : ""}
                            onChange={(e) => handleChange("amount", e)}
                            className="capital-input1"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid capital amount greater than Rs. 50000 and less than Rs. 1000000.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      {/* Tenure Section */}
                      <Col lg={3} md={12} sm={12} xs={12} className="mb-3">
                        <Form.Group>
                          <Form.Label className="fontsize">
                            Tenure<span style={{ color: "red" }}>*</span>
                          </Form.Label>
                          <Form.Select
                            name="tenure"
                            aria-label="Select tenure"
                            value={formData.tenureId ? formData.tenureId : ""}
                            onChange={(e) => handleChange("tenureId", e)}
                            required
                          >
                            <option value="">Select Tenure</option>
                            {tenureList && tenureList.length > 0 && tenureList.map((item, key) => {
                              return <option value={item._id} key={key}>{item.name}</option>
                            })}
                          </Form.Select>
                          <Form.Control.Feedback type="invalid">
                            Please select a valid tenure.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col lg={6} md={12} sm={12} xs={12}>
                        <Row className='optionalcs'>
                          <Col lg={6} md={6} sm={12} xs={12} className="mb-3">
                            <Form.Group>
                              <Form.Label className="fontsize">
                                Agent Name (Optional)
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Agent Name"
                                name="capital"
                                autoComplete="off"
                                value={formData.agentName ? formData.agentName : ""}
                                onChange={(e) => handleChange("agentName", e)}
                                className="capital-input"
                              />
                              <Form.Control.Feedback type="invalid">
                                Please provide a valid Agent Name.
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <Col lg={6} md={6} sm={12} xs={12} className="mb-3">
                            <Form.Group>
                              <Form.Label className="fontsize">
                               Agent Mobile (Optional)
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Agent Mobile No. (10 digit)"
                                name="capital"
                                autoComplete="off"
                                value={formData.agentMobile ? formData.agentMobile : ""}
                                onChange={(e) => handleChange("agentMobile", e)}
                                className="capital-input"
                              />
                              <Form.Control.Feedback type="invalid">
                                Please provide a valid Agent Mobile Number.
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <div className="d-flex justify-content-center mt-3">
                      <Button
                        type="submit"
                        variant="primary"
                        disabled={isDisabled}
                      >
                        Go To Investment Page
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className='mt-4 '>
            <Col>
              <Card className="cardborder p-3">

                <Card.Body>
                  <Card.Title><h3 style={{ color: "#4590FE" }}>{propertyData?.name}</h3>
                    <h6><img src={locationImg} className='mb-1' />{propertyData?.location}</h6>

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