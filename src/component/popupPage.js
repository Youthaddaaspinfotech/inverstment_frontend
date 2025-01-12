import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { updateUserAction, getUserInfoAction } from "../actions/admin.actions";

const PopupForm = () => {
    const [userName, setUserName] = useState(
        JSON.parse(localStorage.getItem('userData'))?.name || ''
    );
    const [fullName, setFullName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [isDisabled, setDisabled] = useState(false);
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({});
    const [userData, setUserData] = useState(null);
    const user = JSON.parse(localStorage.getItem('userData')) || ''


    const getList = async () => {
        const resp = await getUserInfoAction({ userId: user._id });
        if (resp.code === 200) {
            const user = resp.data[0]; // Extract the first user object from the array
            setUserData(user); // Set the user object directly in the state
            setFormData({ ...formData, _id: user?._id });
        }
    };

    useEffect(() => {
        if (userData && !userData?.name) {
            setShowPopup(true);
        }
    }, [userData]);
    


    const handleSubmit = async(event) => {
        event.preventDefault();

        // Save user data to localStorage
        const resp = await updateUserAction(formData)
        if(resp.code === 200){
            const userData = {
                name: fullName,
                mobile: mobileNumber
            };
            localStorage.setItem('userData', JSON.stringify(userData));

            setShowPopup(false);
        }
    };

    const handleChange = (name, event) => {
        setFormData({ ...formData, [name]: event.target.value });
    };

    useEffect(()=>{
        getList();
    },[])


    return (
        <>
            {showPopup && (
                <div className="popup-container">
                    <div className="popup">
                        <h5>Please fill out your details</h5>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="">
                                <Col lg={12} md={12} sm={12} xs={12} className="mb-3">
                                    <Form.Group>
                                        <Form.Label className="fontsize">
                                            Full Name<span style={{ color: "red" }}>*</span>
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Your Full Name"
                                            name="name"
                                            autoComplete="off"
                                            value={formData.name ? formData.name : ""}
                                            onChange={(e) => handleChange("name", e)}
                                            className="capital-input1"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid Full Name.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12} className="mb-3">
                                    <Form.Group>
                                        <Form.Label className="fontsize">
                                            Mobile Number<span style={{ color: "red" }}>*</span>
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Your Mobile Number."
                                            name="name"
                                            autoComplete="off"
                                            value={formData.mobile ? formData.mobile : ""}
                                            onChange={(e) => handleChange("mobile", e)}
                                            className="capital-input1"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid capital amount greater than Rs. 50000 and less than Rs. 1000000.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className="d-flex justify-content-center mt-3">
                                <Button
                                    type="submit"
                                    variant="success"
                                    className="font14"
                                    disabled={isDisabled}
                                >
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            )}
        </>
    );
};

export default PopupForm;
