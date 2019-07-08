import styled from "styled-components";
import React from "react";
import { layoutBreak } from "../../../functions/styles";

const Container = styled.div`
  flex-direction: row;
  height: 50px;
  display: none;
  align-items: center;
  padding-left: 35px;
  @media (min-width: ${layoutBreak}px) {
    height: 80px;
    display: flex;
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
  font-family: "SF Compact Display", sans-serif;
  margin-right: 60px;
  cursor: pointer;
`;

const NavigationRow = () => {
  return (
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
      >Features</Button>
      <Button>Contact US</Button>
    </Container>
  );
};

export default NavigationRow;
