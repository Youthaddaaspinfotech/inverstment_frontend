import React, { useState, useEffect } from 'react'
import { Card, Button, Row, Col, Form, ListGroup } from "react-bootstrap"
import pay_using from "../assets/card/card_icon/pay_using.png"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { addEditPortfolioAction } from '../actions/admin.actions';
import { ToastContainer, toast } from "react-toastify";


const Pay_using_details = () => {
  const [tenureList, setTenureList] = useState([]);
  const [isDisabled, setDisabled] = useState(false);
  const [validated, setValidated] = useState(false);
  const location = useLocation();

  const propertyData = location.state?.homeData;

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    amount: "",
    tenureId: "",
  });


  // const handleSubmit = async (event) => {
  //   event.preventDefault(); // Prevent default form submission
  //   const form = event.currentTarget;

  //   // Check validity of the form
  //   if (form.checkValidity() === false) {
  //     event.stopPropagation();
  //     setValidated(true);
  //   } else {
  //     setDisabled(true);
  //     const msg = "Property investment success";
  //     const postData = new FormData();
  //     for (let key in formData) {
  //       postData.append(key, formData[key]);
  //     }
  //     postData.append("propertyId", propertyData._id);
  //     postData.append("userId", localStorage.getItem("userLoginId"));

  //     console.log("postData-=-=-",postData)

  //     const resp = await addEditPortfolioAction(postData);
  //     if (resp.code === 200) {
  //       toast.success(resp.msg || msg);
  //       navigate("/pay_using_details", {
  //         state: { amount: formData.amount },
  //       });
  //     } else {
  //       setDisabled(false);
  //       toast.error(resp.message || "An error occurred.");
  //     }
  //   }
  // }

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      setDisabled(true);
      const msg = "Property investment success";

      const postData = new FormData();
      // Add only necessary data to FormData
      for (let key in formData) {
        postData.append(key, formData[key]);
      }
      // Ensure these are appended once
      postData.set("propertyId", propertyData._id); // Use 'set' to avoid duplication
      // postData.set("userId", (((localStorage.getItem("userLoginId"))).userData)._id);
      postData.set("userId", JSON.parse(localStorage.getItem("userData"))?._id);


      // Debugging: Log FormData
      for (let pair of postData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }

      const resp = await addEditPortfolioAction(postData);
      if (resp.code === 200) {
        toast.success(resp.msg || msg);
        navigate("/Property_portfolio");
      } else {
        setDisabled(false);
        toast.error(resp.message || "An error occurred.");
      }
    }
  };


  const handleChange = (name, event) => {
    setFormData({ ...formData, [name]: event.target.value });
  };

  useEffect(() => {
    if (location.state && location.state.formData) {
      setFormData(location.state.formData);  // If formData exists in location.state, use it
    }
  }, [location.state]);

  console.log("formData.amount", formData)
  return (
    <>

      <Row className="justify-content-center mt-4 p-2">
        <Col lg={11} md={11} sm={11} xs={11} onClick={(e) => { navigate(-1) }}><Link>Back</Link></Col>

        <Col lg={9}>
          <Card className='cardborder'>
            <Card.Body>
              <Card.Title className='text-center'><h5>Pay Using This Details</h5></Card.Title>
              <Row className="justify-content-center mt-4  ">
                <Col lg={11}>
                  <Row className="ustify-content-center mt-4 g-4">
                    <Col lg={7}>
                      <Form >
                        <Row className="mb-3 ">

                          <Form.Group as={Col} md="12" controlId="validationFormik01">
                            <Form.Label>Account Number</Form.Label>
                            <Form.Control
                              type="text"
                              name="firstName" placeholder='932567890765' disabled />
                          </Form.Group>
                        </Row>
                        <Row className="mb-3">
                          <Form.Group as={Col} md="12" controlId="validationFormik03">
                            <Form.Label>IFSC Code</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="SBIND00456"
                              name="city" disabled />
                          </Form.Group>

                        </Row>
                        <h5>UPI ID</h5>
                        <span>1234567890@ibk</span>

                      </Form>
                    </Col>
                    <Col lg={5}>
                      <Card className='paycard'>
                        <ListGroup variant="flush" className='p-1'>
                          <ListGroup.Item>
                            <Row className='g-2 p-1'>
                              <Col lg={12} md={12} sm={12} xs={12}>
                                <h6><img src={pay_using} /> <span>Payment Summary</span></h6>
                              </Col>
                              <Col className='text-start'> Product name</Col>
                              <Col className='text-end'>Price</Col>
                            </Row>
                          </ListGroup.Item>
                          <ListGroup.Item >
                            <Row className='g-3 '>
                              <Col>Pune Property</Col>
                              <Col className='text-end'>30,00,000</Col>
                            </Row>

                            <Row className='g-3 mt-3'>

                              <Col>Intrest</Col>
                              <Col className='text-end'>11%</Col>
                            </Row>


                          </ListGroup.Item>
                          {/* <ListGroup.Item><h5 className='text-end'><span>Total:</span>35,00,000</h5></ListGroup.Item> */}
                          <ListGroup.Item>
                            <h5 className="text-end">
                              <span>Total:</span> {formData.amount ? formData.amount : "Data Not Fetched"}
                            </h5>
                          </ListGroup.Item>
                        </ListGroup>

                      </Card>

                      <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="align-items-center">
                          {/* Capital Section */}
                          <Col lg={12} md={12} sm={12} xs={12} className="mb-3">
                            <Form.Group>
                              <Form.Label className="fontsize">
                                Transaction ID<span style={{ color: "red" }}>*</span>
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Payment Transaction ID"
                                name="transactionId"
                                autoComplete="off"
                                value={formData.transactionId}
                                onChange={(e) => handleChange("transactionId", e)}
                                required
                              />
                              <Form.Control.Feedback type="invalid">
                                Please provide a valid transactionId. It should be alphanumeric and between 8 to 20 characters.
                              </Form.Control.Feedback>
                            </Form.Group>

                          </Col>
                        </Row>
                        <div className="d-flex justify-content-center mt-3">
                          <Button
                            type="submit"
                            variant="success"
                            disabled={isDisabled}
                          >
                            Payment Completed
                          </Button>
                        </div>
                      </Form>
                      {/* <Button variant="success" className='w-100 mt-3'>
                        <Link to="/Property_portfolio" style={{ textDecoration: 'none', color: 'white' }}>
                          Payment Completed
                        </Link>
                      </Button> */}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>

        </Col>
      </Row>
    </>

  )
}

export default Pay_using_details;