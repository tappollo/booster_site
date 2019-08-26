import styled from "styled-components";
import React from "react";
import { layoutBreak, shrinkBreak } from "../../../functions/styles";
import Content from "../../../components/Content";

const Container = styled.div`
  flex-direction: row;
  height: 80px;
  display: none;
  align-items: center;
  padding: 0 20px;
  @media (min-width: ${shrinkBreak}px) {
    display: flex;
    padding: 0 60px;
  }
  @media (min-width: ${layoutBreak}px) and (max-width: ${shrinkBreak}px) {
    display: flex;
    padding: 0 30px;
  }
`;

const Logo = styled.img.attrs({
  src: require("../../../assets/images/logo-outline.png"),
  alt: "Logo"
})`
  width: 30px;
  margin-right: 15px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 19px;
`;

const Button = styled.div`
  font-family: "Hind Guntur", sans-serif;
  margin-left: 60px;
  font-size: 16px;
  cursor: pointer;
`;

const MakeItFloat = styled.div`
  width: 100%;
  background-color:#001d47;
  position: fixed;
  z-index: 1000;
`;

const NavigationRow = () => {
  return (
    <MakeItFloat>
      <Content>
        <Container>
          <Logo />
          <Title>BOOSTER</Title>
          <div style={{ flex: 1 }} />
          <Button
            onClick={() =>
              document.getElementById("benefits")!.scrollIntoView({
                behavior: "smooth"
              })
            }
          >
            Benefits
          </Button>
          <Button
            onClick={() =>
              document.getElementById("features")!.scrollIntoView({
                behavior: "smooth"
              })
            }
          >
            Features
          </Button>
          <Button
            onClick={() =>
              document.getElementById("contacts")!.scrollIntoView({
                behavior: "smooth"
              })
            }
          >
            Contact us
          </Button>
        </Container>
      </Content>
    </MakeItFloat>
  );
};

export default NavigationRow;
