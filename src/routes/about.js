import React from 'react'
import { Row, Col ,Card,Button} from "react-bootstrap"
import Get_in_touch from '../component/get_in_touch'
import aboutus from "../assets/about/about_us.png"
import img from "../assets/about/img.png"
const About = () => {
    return (
        <>
            <Row>
                <Col lg={12}><img src={aboutus} className='aboutimg' /></Col>
            </Row>

            <Row className='justify-content-center'>
                <Col lg={9} md={9} sm={9} xs={9}>
                    <Row>
                        <Col lg={7} md={7} sm={12} xs={12}>
                            <Row className='p-2'>
                                <Col lg={12} md={12} sm={12} xs={12}><h5 style={{ color: "#4591FF" }}>About</h5></Col>
                                <Col lg={12} md={12} sm={12} xs={12} className='mt-2'><h6> Jaganath Limited Partnerships</h6></Col>
                                <Col lg={8} md={8} sm={12} xs={12} className='mt-2'><p>When you invest with Atlas, you are more than a number; you are a partner. As a partner with us, you can access
                                    opportunities usually reserved only for the largest institutional investors. You can access a team driven only by
                                    excellence and results. You can access real estate investment opportunities designed with you in mind.</p></Col>
                            </Row>
                        </Col>
                        <Col lg={5} md={5} sm={12} xs={12}>
                            <img src={img} style={{ width: "100%", height: "auto" }} />
                        </Col>
                    </Row>


                </Col>
            </Row>

            <Row className='justify-content-center'>
                <Col lg={8} md={8} sm={8} xs={8}>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12} className='text-center'><h5 style={{ color: "#4591FF" }} >Why</h5></Col>
                        <Col lg={12} md={12} sm={12} xs={12} className='text-center'><h5> Jaganath Limited Partnerships</h5></Col>
                        <Col lg={12} md={12} sm={12} xs={12} className='mt-2 text-center'><p>We bring our members high quality commercial investment opportunities that are normally hidden away in country clubs or investment firms. Investors through Equity Street Capital get access to a diverse range of retail, multi-family and office buildings investment opportunities.</p></Col>

                        <Col lg={12} md={12} sm={12} xs={12}>
                            <Row className='g-3 mt-3'>
                                <Col lg={4} md={4} sm={6} xs={12} className=''>
                               
                                <Card>
                                <Card.Body>
                                    <Card.Title className='text-center'>Hassle Free Investing</Card.Title>
                                    
                                    <Card.Text>
                                    We bring our members high quality commercial investment opportunities that are normally hidden away in country clubs or investment firms. Investors through Equity Street Capital get access to a diverse range of retail
                                    </Card.Text>
                                   
                                </Card.Body>
                            </Card>
                                </Col>
                                <Col lg={4} md={4} sm={6} xs={12} className=''>
                               
                               <Card>
                               <Card.Body>
                                   <Card.Title className='text-center'>Hassle Free Investing</Card.Title>
                                   
                                   <Card.Text>
                                   We bring our members high quality commercial investment opportunities that are normally hidden away in country clubs or investment firms. Investors through Equity Street Capital get access to a diverse range of retail
                                   </Card.Text>
                                  
                               </Card.Body>
                           </Card>
                               </Col>
                               <Col lg={4} md={4} sm={6} xs={12} className=''>
                               
                               <Card>
                               <Card.Body>
                                   <Card.Title className='text-center'>Hassle Free Investing</Card.Title>
                                   
                                   <Card.Text>
                                   We bring our members high quality commercial investment opportunities that are normally hidden away in country clubs or investment firms. Investors through Equity Street Capital get access to a diverse range of retail
                                   </Card.Text>
                                  
                               </Card.Body>
                           </Card>
                               </Col>
                            </Row>
                            <Row className='g-3 mt-3'>
                                <Col lg={4} md={4} sm={6} xs={12} className=''>
                               
                                <Card>
                                <Card.Body>
                                    <Card.Title className='text-center'>Hassle Free Investing</Card.Title>
                                    
                                    <Card.Text>
                                    We bring our members high quality commercial investment opportunities that are normally hidden away in country clubs or investment firms. Investors through Equity Street Capital get access to a diverse range of retail
                                    </Card.Text>
                                   
                                </Card.Body>
                            </Card>
                                </Col>
                                <Col lg={4} md={4} sm={6} xs={12} className=''>
                               
                               <Card>
                               <Card.Body>
                                   <Card.Title className='text-center'>Hassle Free Investing</Card.Title>
                                   
                                   <Card.Text>
                                   We bring our members high quality commercial investment opportunities that are normally hidden away in country clubs or investment firms. Investors through Equity Street Capital get access to a diverse range of retail
                                   </Card.Text>
                                  
                               </Card.Body>
                           </Card>
                               </Col>
                               <Col lg={4} md={4} sm={6} xs={12} className=''>
                               
                               <Card>
                               <Card.Body>
                                   <Card.Title className='text-center'>Hassle Free Investing</Card.Title>
                                   
                                   <Card.Text>
                                   We bring our members high quality commercial investment opportunities that are normally hidden away in country clubs or investment firms. Investors through Equity Street Capital get access to a diverse range of retail
                                   </Card.Text>
                                  
                               </Card.Body>
                           </Card>
                               </Col>
                            </Row>

                        </Col>

                    </Row>
                  
                  <Row className='justify-content-center mt-4 g-2 text-center'>
                    <Col lg={3} md={4} sm={12} xs={12} >
                    <Button variant="primary" className='px-4 py-2'>Current Opportunities</Button>
                    </Col>
                    <Col lg={3} md={4} sm={12} xs={12}>
                    <Button variant="primary" className='px-1 py-2 bg-white text-info'>Learn More About Investing</Button>
                    </Col>
                  </Row>


             <Row className='mt-4'>
                <Col className='aboutinvestment'>
                <Row className="d-flex justify-content-center align-items-center text-center">
                    <Col lg={12} md={12} sm={12} xs={12}  ><h2 className='textColor'>Ready to invest?</h2></Col>
                    <Col lg={12} md={12} sm={12} xs={12}  >  <Button variant="outline-light">View Current Opportunities</Button></Col>
                </Row>
                </Col>
             </Row>
                </Col>
            </Row>
            <Get_in_touch />
        </>

    )
}

export default About