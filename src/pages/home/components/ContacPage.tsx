import styled from "styled-components";
import React from "react";
import { layoutBreak } from "../../../functions/styles";

const Container = styled.div`
  align-items: center;
  padding: 0 20px;
  margin-bottom: 100px;
`;

const Title = styled.h3`
  font-family: "Hind Guntur", sans-serif;
  font-weight: 600;
  font-size: 50px;
  margin-bottom: 80px;
`;

const Content = styled.div`
  flex-direction: row;
  align-items: center;
`;

const Company = styled.img.attrs({
  src: require("../../../assets/images/company.png"),
  alt: "Tappollo"
})`
  width: 80px;
  margin-right: 15px;
  @media (min-width: ${layoutBreak}px) {
    width: 122px;
    margin-right: 30px;
  }
`;

const Name = styled.h3`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 30px;
  line-height: 70px;
  color: #e85a4a;
  text-transform: uppercase;
  @media (min-width: ${layoutBreak}px) {
    font-size: 60px;
    margin-bottom: 20px;
  }
`;

const Info = styled.p`
  font-size: 16px;
  font-family: "Hind Guntur", sans-serif;
  margin: 3px 0;
  line-height: 1em;
  a {
    color: white;
    text-decoration: none;
  }
  @media (min-width: ${layoutBreak}px) {
    font-size: 20px;
    margin: 8px 0;
  }
`;

const ContactPage = () => {
  return (
    <Container id="contacts">
      <Title>CONTACT US</Title>
      <Content>
        <Company />
        <div>
          <Name>Tappollo media</Name>
          <Info>85 Broad Street, Suite 27-107</Info>
          <Info>New York, NY 10004</Info>
          <Info>
            <a href="mailto:general@tappollo.com">general@tappollo.com</a>
          </Info>
          <Info>
            <a href="tel:(917)724-4968">(917)724-4968</a>
          </Info>
        </div>
      </Content>
    </Container>
  );
};

export default ContactPage;
