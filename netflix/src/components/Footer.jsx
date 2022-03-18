import React from "react";


import { Button,Container, ListGroup, ListGroupItem, Row, Col} from "react-bootstrap";

const myStyle= {
    backgroundColor: "black",
    color: "white"
  };

const MyFooter = () => {

const logoStyle ={
   paddingLeft: "30px",
    color: "#fff9",
    
}

const containerWrapper ={
    backgroundColor:"black",
    padding: " 15px 15px",
   
}
    
  return (
  <Container fluid style={containerWrapper}>
     <Container style={logoStyle} >
       
            <i class="bi bi-facebook mx-1"></i>
            <i class="bi bi-instagram mx-1"></i>
        <i class="bi bi-twitter mx-1"></i>
        <i class="bi bi-youtube mx-1"></i>
       
       </Container>
     
      <Container >
        <Row>
         <Col>
              <ListGroup variant="flush">
                <ListGroupItem style={myStyle} >Audio and Subtitles</ListGroupItem>
                <ListGroupItem style={myStyle} >Media Center</ListGroupItem>
                <ListGroupItem style={myStyle} >Privacy</ListGroupItem>
                <ListGroupItem style={myStyle} >Contact us</ListGroupItem>
                <Button variant="outline-light">Service Code</Button>
              </ListGroup>
         </Col>
        <Col>
              <ListGroup variant="flash">
                <ListGroupItem style={myStyle} >Audio Description</ListGroupItem>
                <ListGroupItem style={myStyle}>Investor Relations</ListGroupItem>
                <ListGroupItem style={myStyle}>Legal Notices</ListGroupItem>
              </ListGroup>
        </Col>
          <Col>
              <ListGroup variant="flash">
                <ListGroupItem style={myStyle}>Help Center</ListGroupItem>
                <ListGroupItem style={myStyle} >Jobs</ListGroupItem>
                <ListGroupItem style={myStyle}>Cookie</ListGroupItem>
                <ListGroupItem style={myStyle}>Preferences</ListGroupItem>
              </ListGroup>
          </Col>
          <Col>
              <ListGroup variant="flash">
                <ListGroupItem style={myStyle} >Gift Cards</ListGroupItem>
                <ListGroupItem style={myStyle}>Terms of Use</ListGroupItem>
                <ListGroupItem style={myStyle}>Corporate</ListGroupItem>
                <ListGroupItem style={myStyle}>Information</ListGroupItem>
              </ListGroup>
          </Col>
        </Row>
      </Container>
    
  </Container>

  );
};
export default MyFooter;
