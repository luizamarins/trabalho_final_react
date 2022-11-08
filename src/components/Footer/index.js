import React from "react";

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Content,
  Text,
  Copyright
} from "./styled";
//import Logo from '../../assets/logo1.jpg'
import logo1 from '../../assets/img/logo1.jpg'

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>SOBRE NÓS</Heading>
       
          </Column>
          
          <Column>
            <FooterLink href="#">Ajuda</FooterLink>
            <FooterLink href="#">Politica de privacidade</FooterLink>
            <FooterLink href="#">Termos e condições</FooterLink>
          </Column>
          <Column>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>LinkedIn</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
        <hr></hr>
        <Content>
          <div class="copyright">
            <Copyright>Copyright &copy; 2022 All Rights Reserved by BiblioOn</Copyright>
			<img src={logo1} alt="logo" />
          </div>
        </Content>
      </Container>
    </Box>
  );
};
export default Footer;