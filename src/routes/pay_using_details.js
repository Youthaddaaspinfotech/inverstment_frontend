import React from 'react'
import {Card, Button,Row,Col} from "react-bootstrap"
const Pay_using_details = () => {
  return (
<>

          <Row className="justify-content-center mt-4">
            <Col lg={9}>
          
    <Card  className='cardborder text-center'>
      <Card.Body>
        <Card.Title><h1>Pay Using This Details</h1></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
 
            </Col>
          </Row>

    
  
</>

  )
}

export default Pay_using_details;