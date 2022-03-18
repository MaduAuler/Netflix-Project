import React from "react";
import { Box, Container, Row, Column, FooterLink, Icon } from "./FooterStyles";

import { Button} from "react-bootstrap";

const MyFooter = () => {
  return (
    <Box>
     <Container>
       <Icon>
            <i class="bi bi-facebook mx-1"></i>
            <i class="bi bi-instagram mx-1"></i>
        <i class="bi bi-twitter mx-1"></i>
        <i class="bi bi-youtube mx-1"></i>
       </Icon>
       </Container>
     
      <Container>
        <Row>
          <Column>
            <FooterLink>Audio and Subtitles</FooterLink>
            <FooterLink >Media Center</FooterLink>
            <FooterLink >Privacy</FooterLink>
            <FooterLink >Contact us</FooterLink>
            <Button variant="outline-light">Service Code</Button>
          </Column>
          <Column>
            <FooterLink>Audio Description</FooterLink>
            <FooterLink>Investor Relations</FooterLink>
            <FooterLink >Legal Notices</FooterLink>
          </Column>
          <Column>
            <FooterLink>Help Center</FooterLink>
            <FooterLink >Jobs</FooterLink>
            <FooterLink >Cookie</FooterLink>
            <FooterLink >Preferences</FooterLink>
          </Column>
          <Column>
            <FooterLink >Gift Cards</FooterLink>
            <FooterLink >Terms of Use</FooterLink>
            <FooterLink>Corporate</FooterLink>
            <FooterLink>Information</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>


  );
};
export default MyFooter;
