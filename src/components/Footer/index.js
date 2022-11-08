import React from "react";
import { Box, Container, Row, Column, FooterLink, Content, Copyright } from "./styled";
import logo1 from '../../assets/img/logo1.jpg'

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>

          <Column>
            <FooterLink href="#">Ajuda</FooterLink>
            <FooterLink href="#">Política de privacidade</FooterLink>
            <FooterLink href="#">Termos e Condições</FooterLink>
          </Column>

          <Column>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span>Twitter</span>
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