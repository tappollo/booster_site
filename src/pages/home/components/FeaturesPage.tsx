import styled from "styled-components";
import React from "react";
import { layoutBreak } from "../../../functions/styles";

const Container = styled.div`
  width: 100%;
  background-size: contain;
  background-repeat: repeat-y;
  background-position-x: center;
  background-image: url(${require("../../../assets/images/line_background.svg")});
`;

interface Feature {
  title: string;
  subtitle: string;
  image: string;
  image2x: string;
}

const features: Feature[] = [
  {
    title: "Sign Up/ Login",
    subtitle:
      "Sign up and login via email social media\n(Facebook and Google) and phone number",
    image: require("../../../assets/features/login.png"),
    image2x: require("../../../assets/features/login@2x.png")
  },
  {
    title: "Text chat",
    subtitle:
      "Full chat functionality implemented\nfor both frontend and backend",
    image: require("../../../assets/features/chat.png"),
    image2x: require("../../../assets/features/chat@2x.png")
  },
  {
    title: "Settings",
    subtitle: "A place to manage your app settings",
    image: require("../../../assets/features/settings.png"),
    image2x: require("../../../assets/features/settings@2x.png")
  },
  {
    title: "Image Upload/ Download",
    subtitle:
      "Highly optimized and fast image upload and\ndownload functionalities with automatic\nthumbnail generation",
    image: require("../../../assets/features/image.png"),
    image2x: require("../../../assets/features/image@2x.png")
  },
  {
    title: "Video Player",
    subtitle: "A full featured video player",
    image: require("../../../assets/features/video.png"),
    image2x: require("../../../assets/features/video@2x.png")
  },
  {
    title: "Coming Soon",
    subtitle:
      "Live streaming, deeplinking\npayment integration, Privacy Policy\nand TOS etc",
    image: require("../../../assets/features/coming.png"),
    image2x: require("../../../assets/features/coming@2x.png")
  }
];

const Cell = (props: { feature: Feature }) => (
  <Cell.Container>
    <Cell.Image image={props.feature.image} image2x={props.feature.image2x} />
    <Cell.Title>{props.feature.title}</Cell.Title>
    {props.feature.subtitle.split("\n").map((text, index) => (
      <Cell.Subtitle key={index}>{text}</Cell.Subtitle>
    ))}
  </Cell.Container>
);

Cell.Subtitle = styled.p`
  text-align: center;
  font-family: "SF Compact Display", sans-serif;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  @media (min-width: ${layoutBreak}px) {
    text-align: left;
    font-size: 15px;
  }
`;

Cell.Title = styled.h3`
  text-align: center;
  font-family: "SF Compact Display", sans-serif;
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 16px;
  @media (min-width: ${layoutBreak}px) {
    text-align: left;
    font-size: 50px;
  }
`;

Cell.Image = styled.div<{ image: any; image2x: any }>`
  background-image: ${props => `url(${props.image})`};
  width: 400px;
  height: 400px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media (min-width: ${layoutBreak}px) {
    width: 500px;
    height: 500px;
  }
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: ${props => `url(${props.image2x})`};
  }
`;

Cell.Container = styled.div`
  align-items: center;
  margin-bottom: 90px;
`;

const Title = styled.h1`
  align-self: center;
  font-family: "SF Compact Display", sans-serif;
  font-weight: 600;
  font-size: 30px;
  text-transform: uppercase;
  margin: 50px 0;
  @media (min-width: ${layoutBreak}px) {
    font-size: 50px;
  }
`;

const FeaturesPage = () => {
  return (
    <>
      <Title>Prebuilt component</Title>
      <Container>
        {features.map((feature, index) => (
          <Cell key={index} feature={feature} />
        ))}
      </Container>
    </>
  );
};

export default FeaturesPage;
