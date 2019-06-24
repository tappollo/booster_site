import Content from "../../../components/Content";
import * as React from "react";
import {
  layoutBreak,
  shrinkBreak,
  useMobileLayout
} from "../../../functions/styles";
import styled, { css } from "styled-components";

const Container = styled.div`
  flex-direction: column;
  @media (min-width: ${layoutBreak}px) {
    align-items: center;
    flex-direction: row;
  }
`;

const even = css`
  @media (min-width: ${layoutBreak}px) {
    flex: 1;
  }
`;

const Left = styled.div`
  ${even};
  padding-left: 20px;
  @media (min-width: ${shrinkBreak}px) {
    padding-left: 60px;
  }
  @media (min-width: ${layoutBreak}px) and (max-width: ${shrinkBreak}px) {
    padding-left: 30px;
  }
`;

const Right = styled.div`
  background-color: blue;
  height: 500px;
  ${even}
`;

const Title = styled.h1`
  font-family: "Alegreya Sans", sans-serif;
  font-weight: 900;
  font-size: 35px;
  letter-spacing: 2px;
  padding: 15px 20px 15px 0;
  text-transform: uppercase;
  margin-right: 15px;
  @media (min-width: ${shrinkBreak}px) {
    font-size: 70px;
  }
  @media (min-width: ${layoutBreak}px) and (max-width: ${shrinkBreak}px) {
    font-size: 45px;
  }
`;

const Header = styled.div`
  flex-direction: row;
  align-items: center;
`;

const PlatformImg = styled.img`
  height: 30px;
  margin-right: 15px;
`;

const Desc = () => (
  <Desc.P>
    Scaffolding code, prebuilt UI components and integrated Cl/CD (continuous
    integration/continuous delivery) for rapid development in ios, Android and
    web. Booster helps you develop native apps for all platforms in half the
    time and half the manpower
  </Desc.P>
);

Desc.P = styled.p`
  font-family: "SF Compact Display", sans-serif;
  font-size: 15px;
  font-weight: normal;
  margin-bottom: 15px;
  @media (min-width: ${shrinkBreak}px) {
    font-size: 20px;
    font-weight: bold;
  }
  @media (min-width: ${layoutBreak}px) and (max-width: ${shrinkBreak}px) {
    font-size: 18px;
    font-weight: 500;
  }
`;

const GetStarted = styled.button`
  width: 240px;
  height: 60px;
  font-family: "SF Compact Display", sans-serif;
  background-color: #ffb000;
  margin-top: 15px;
  border-radius: 8px;
  color: white;
  font-size: 27px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;

const WhoWeAre = () => {
  const mobileLayout = useMobileLayout();
  return (
    <Content>
      <Container
        style={{ minHeight: mobileLayout ? "none" : window.innerHeight }}
      >
        <Left>
          <Header>
            <Title>Booster</Title>
            <PlatformImg
              src={require("../../../assets/images/ios.png")}
              alt="Platform iOS"
            />
            <PlatformImg
              src={require("../../../assets/images/android.png")}
              alt="Platform Android"
            />
            <PlatformImg
              src={require("../../../assets/images/web.png")}
              alt="Platform Web"
            />
          </Header>
          {!mobileLayout && <Desc />}
          <GetStarted>Get Started</GetStarted>
        </Left>
        <div style={{ height: 30, width: 30 }} />
        <Right />
        {mobileLayout && <Desc />}
      </Container>
    </Content>
  );
};

export default WhoWeAre;
