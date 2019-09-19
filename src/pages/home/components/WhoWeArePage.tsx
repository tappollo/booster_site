import Content from "../../../components/Content";
import * as React from "react";
import { layoutBreak, shrinkBreak, useMobileLayout } from "../../../functions/styles";
import styled, { css } from "styled-components";
import WhoWeAreAnimation from "./WhoWeAreAnimation";

const Container = styled.div`
  flex-direction: column-reverse;
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
  ${even};
  padding-right: 20px;
  padding-left: 20px;
  @media (min-width: ${shrinkBreak}px) {
    padding-right: 60px;
    padding-left: 0;
  }
  @media (min-width: ${layoutBreak}px) and (max-width: ${shrinkBreak}px) {
    padding-right: 30px;
    padding-left: 0;
  }
`;

const Title = styled.h1`
  font-family: "Alegreya Sans", sans-serif;
  font-weight: 900;
  font-size: 35px;
  letter-spacing: 2px;
  padding: 15px 20px 15px 0;
  text-transform: uppercase;
  @media (min-width: ${shrinkBreak}px) {
    font-size: 70px;
  }
  @media (min-width: ${layoutBreak}px) and (max-width: ${shrinkBreak}px) {
    font-size: 45px;
  }
`;

const Header = () => (
  <Header.Container>
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
  </Header.Container>
);

Header.Container = styled.div`
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  @media (min-width: ${layoutBreak}px) {
    margin-top: 0;
  }
`;

const PlatformImg = styled.img`
  margin-right: 15px;
  height: 20px;
  @media (min-width: ${layoutBreak}px) {
    height: 30px;
  }
`;

const Desc = (props: any) => (
  <Desc.P {...props}>
    Integrated scaffolding codes, UI components, integration and delivery
    pipeline for fast prototyping in iOS, android and mobile web.
  </Desc.P>
);

Desc.P = styled.p`
  font-family: "Hind Guntur", sans-serif;
  font-weight: normal;
  font-size: 16px;
  margin-bottom: 15px;
  line-height: 18px;
  @media (min-width: ${shrinkBreak}px) {
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
  }
  @media (min-width: ${layoutBreak}px) and (max-width: ${shrinkBreak}px) {
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
  }
`;

const GetStarted = styled.a`
  font-family: "Hind Guntur", sans-serif;
  background-color: #ffb000;
  margin: 15px 0 30px;
  color: white;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  width: 200px;
  height: 50px;
  line-height: 56px;
  font-size: 23px;
  @media (min-width: ${shrinkBreak}px) {
    width: 240px;
    height: 60px;
    line-height: 66px;
    font-size: 27px;
  }
`;

const Github = () => (
  <Github.Container
    onClick={() => {
      window.open("https://github.com/tappollo/booster", "_blank");
    }}
  >
    Source code available on
    <Github.Img />
    <Github.Title>GitHub</Github.Title>
  </Github.Container>
);

Github.Img = styled.img.attrs({
  src: require("../../../assets/images/Github.png"),
  alt: "GitHub"
})`
  width: 35px;
  margin-left: 10px;
  margin-right: 5px;
  cursor: pointer;
`;

Github.Title = styled.div`
  font-weight: bold;
  font-size: 17px;
  cursor: pointer;
`;

Github.Container = styled.div`
  margin-bottom: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  font-family: "Hind Guntur", sans-serif;
  font-weight: 400;
  font-size: 15px;
`;

const PowerBy = () => {
  return (
    <PowerBy.Container>
      <PowerBy.Text>Powered by&nbsp;&nbsp;&nbsp;</PowerBy.Text>
      <PowerBy.React />
      <PowerBy.ReactText>React Native</PowerBy.ReactText>
      <PowerBy.Text>&nbsp;&nbsp;&&nbsp;&nbsp;&nbsp;</PowerBy.Text>
      <PowerBy.Firebase />
      <PowerBy.FirebaseText>Firebase</PowerBy.FirebaseText>
    </PowerBy.Container>
  );
};

PowerBy.Container = styled.div`
  flex-direction: row;
  margin: 30px 0;
  align-items: center;
`;

PowerBy.Text = styled.span`
  font-family: "Hind Guntur", sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #ffffff;
`;
PowerBy.ReactText = styled.span`
  font-family: "Hind Guntur", sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: #5bcef0;
  letter-spacing: 0.15px;
`;
PowerBy.React = styled.img.attrs({
  src: require("../../../assets/images/react-logo@3x.png"),
  alt: "React"
})`
  width: 24px;
  height: 21px;
  margin-right: 8px;
  transform: translate(0px, -3px);
`;

PowerBy.FirebaseText = styled.span`
  font-family: "Hind Guntur", sans-serif;
  font-size: 15px;
  color: #ffca2a;
  font-weight: 700;
  letter-spacing: 0.15px;
`;
PowerBy.Firebase = styled.img.attrs({
  src: require("../../../assets/images/firebase-logo@3x.png"),
  alt: "Firebase"
})`
  width: 19px;
  height: 25px;
  transform: translate(0px, -4px);
  margin-right: 8px;
`;

export const WithWithoutBooster = () => {
  return (
    <div style={{ backgroundColor: "#06142C", marginBottom: 60 }}>
      <Content>
        <WithWithoutBooster.Container>
          <WithWithoutBooster.Row>
            <WithWithoutBooster.Head>
              <WithWithoutBooster.Square
                style={{ backgroundColor: "#660C6E" }}
              />
              <WithWithoutBooster.TitleWithout>
                Without Booster
              </WithWithoutBooster.TitleWithout>
            </WithWithoutBooster.Head>
            <WithWithoutBooster.WithoutBoosterImage />
          </WithWithoutBooster.Row>
          <WithWithoutBooster.Row>
            <WithWithoutBooster.Head>
              <WithWithoutBooster.Square
                style={{ backgroundColor: "#FF00C9" }}
              />
              <WithWithoutBooster.TitleWith>
                With Booster
              </WithWithoutBooster.TitleWith>
            </WithWithoutBooster.Head>
            <WithWithoutBooster.WithBoosterImage />
          </WithWithoutBooster.Row>
        </WithWithoutBooster.Container>
      </Content>
    </div>
  );
};

WithWithoutBooster.Container = styled.div`
  position: relative;
  flex-direction: column;
  margin: 0;
  padding: 20px;
  @media (min-width: ${layoutBreak}px) {
    flex-direction: row;
    padding: 40px;
  }
`;

WithWithoutBooster.Row = styled.div`
  margin: 20px 40px;
`;

WithWithoutBooster.Head = styled.div`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;
WithWithoutBooster.Square = styled.div`
  height: 14px;
  width: 12px;
  margin-right: 10px;
`;
WithWithoutBooster.TitleWith = styled.span`
  font-family: "HindGuntur", sans-serif;
  font-weight: 700;
  font-size: 26px;
  color: #ff00c9;
  letter-spacing: 0.41px;
`;
WithWithoutBooster.TitleWithout = styled.span`
  font-family: "HindGuntur", sans-serif;
  font-weight: 400;
  font-size: 26px;
  opacity: 0.62;
  color: #b620e0;
  letter-spacing: 0.29px;
`;
WithWithoutBooster.WithoutBoosterImage = styled.img.attrs({
  src: require("../../../assets/images/without-booster-graph@2x.png"),
  alt: "Without Booster"
})`
  max-width: 100%;
  height: auto;
`;

WithWithoutBooster.WithBoosterImage = styled.img.attrs({
  src: require("../../../assets/images/with-booster-graph@2x.png"),
  alt: "Without Booster"
})`
  max-width: 100%;
  height: auto;
`;

const WhoWeArePage = () => {
  const mobileLayout = useMobileLayout();
  return (
    <Content>
      <Container
        style={{
          minHeight: mobileLayout ? "none" : window.innerHeight - 80,
          marginTop: mobileLayout ? 0 : 80
        }}
      >
        <Left>
          {!mobileLayout && <Header />}
          <Desc />
          <GetStarted href="https://tappollo.github.io/booster" target="_blank">
            Documentation
          </GetStarted>
          <PowerBy />
        </Left>
        <div style={{ height: 30, width: 30 }} />
        <Right>
          {mobileLayout && <Header />}
          <Github />
          <WhoWeAreAnimation />
        </Right>
      </Container>
    </Content>
  );
};

export default WhoWeArePage;
