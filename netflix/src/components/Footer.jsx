import React from "react";


import { Button,Container, ListGroup, ListGroupItem, Row, Col} from "react-bootstrap";

const MyFooter = () => {



    
  return (
  <Container fluid style={{backgroundColor:"black"}}>
     <Container className="pt-3 pb-3">
       
            <i class="bi bi-facebook mx-1"></i>
            <i class="bi bi-instagram mx-1"></i>
        <i class="bi bi-twitter mx-1"></i>
        <i class="bi bi-youtube mx-1"></i>
       
       </Container>
     
      <Container style={{backgroundColor:"black"}}>
        <Row>
         <Col>
              <ListGroup variant="flush">
                <ListGroupItem style={{backgroundColor:"black"}} className="text-white">Audio and Subtitles</ListGroupItem>
                <ListGroupItem style={{backgroundColor:"black"}} className="text-white">Media Center</ListGroupItem>
                <ListGroupItem style={{backgroundColor:"black"}} className="text-white">Privacy</ListGroupItem>
                <ListGroupItem style={{backgroundColor:"black"}} className="text-white">Contact us</ListGroupItem>
                <Button variant="outline-light">Service Code</Button>
              </ListGroup>
         </Col>
        <Col>
              <ListGroup variant="flash">
                <ListGroupItem >Audio Description</ListGroupItem>
                <ListGroupItem>Investor Relations</ListGroupItem>
                <ListGroupItem >Legal Notices</ListGroupItem>
              </ListGroup>
        </Col>
          <Col>
              <ListGroup variant="flash">
                <ListGroupItem>Help Center</ListGroupItem>
                <ListGroupItem >Jobs</ListGroupItem>
                <ListGroupItem >Cookie</ListGroupItem>
                <ListGroupItem>Preferences</ListGroupItem>
              </ListGroup>
          </Col>
          <Col>
              <ListGroup variant="flash">
                <ListGroupItem >Gift Cards</ListGroupItem>
                <ListGroupItem >Terms of Use</ListGroupItem>
                <ListGroupItem>Corporate</ListGroupItem>
                <ListGroupItem>Information</ListGroupItem>
              </ListGroup>
          </Col>
        </Row>
      </Container>
    
      </Container>

  );
};
export default MyFooter;
