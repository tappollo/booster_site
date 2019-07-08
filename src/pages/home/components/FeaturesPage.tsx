import styled from "styled-components";
import React from "react";
import { layoutBreak } from "../../../functions/styles";
import Content from "../../../components/Content";

export const ImageBackground = styled.div`
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
      "Sign up and login via email social media\n(Facebook and Google) and phone number.",
    image: require("../../../assets/features/login.png"),
    image2x: require("../../../assets/features/login@2x.png")
  },
  {
    title: "Text chat",
    subtitle:
      "Full chat functionality implemented\nfor both frontend and backend.",
    image: require("../../../assets/features/chat.png"),
    image2x: require("../../../assets/features/chat@2x.png")
  },
  {
    title: "Settings",
    subtitle: "A place to manage your app settings.",
    image: require("../../../assets/features/settings.png"),
    image2x: require("../../../assets/features/settings@2x.png")
  },
  {
    title: "Image Upload/Download",
    subtitle:
      "Highly optimized and fast image upload and\ndownload functionalities with automatic\nthumbnail generation.",
    image: require("../../../assets/features/image.png"),
    image2x: require("../../../assets/features/image@2x.png")
  },
  {
    title: "Video Player",
    subtitle: "A full featured video player.",
    image: require("../../../assets/features/video.png"),
    image2x: require("../../../assets/features/video@2x.png")
  },
  {
    title: "Coming Soon",
    subtitle:
      "Live streaming, deep linking\n" +
      "payment integration, Privacy Policy, Terms of Service, etc.",
    image: require("../../../assets/features/coming.png"),
    image2x: require("../../../assets/features/coming@2x.png")
  }
];

const Cell = (props: { reversed: boolean; feature: Feature }) => (
  <Cell.Container reversed={props.reversed}>
    <Cell.Image image={props.feature.image} image2x={props.feature.image2x} />
    <Cell.Info>
      <Cell.Title reversed={props.reversed}>{props.feature.title}</Cell.Title>
      {props.feature.subtitle.split("\n").map((text, index) => (
        <Cell.Subtitle key={index} reversed={props.reversed}>
          {text}
        </Cell.Subtitle>
      ))}
    </Cell.Info>
  </Cell.Container>
);

Cell.Info = styled.div`
  @media (min-width: ${layoutBreak}px) {
    flex: 1;
  }
`;

Cell.Subtitle = styled.p<{ reversed: boolean }>`
  text-align: center;
  font-family: "SF Compact Display", sans-serif;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  @media (min-width: ${layoutBreak}px) {
    text-align: ${props => (props.reversed ? "right" : "left")};
    font-size: 15px;
  }
`;

Cell.Title = styled.h3<{ reversed: boolean }>`
  text-align: center;
  font-family: "SF Compact Display", sans-serif;
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 16px;
  @media (min-width: ${layoutBreak}px) {
    text-align: ${props => (props.reversed ? "right" : "left")};
    font-weight: 600;
    font-size: 27px;
  }
`;

Cell.Image = styled.div<{ image: any; image2x: any }>`
  background-image: ${props => `url(${props.image})`};
  width: 350px;
  height: 350px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media (min-width: ${layoutBreak}px) {
    flex: 2;
    height: 500px;
  }
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: ${props => `url(${props.image2x})`};
  }
`;

Cell.Container = styled.div<{ reversed: boolean }>`
  align-items: center;
  margin-bottom: 90px;
  @media (min-width: ${layoutBreak}px) {
    justify-content: center;
    flex-direction: ${props => (props.reversed ? "row-reverse" : "row")};
  }
`;

export const SectionTitle = styled.h1`
  align-self: center;
  font-family: "SF Compact Display", sans-serif;
  font-weight: 600;
  font-size: 30px;
  text-transform: uppercase;
  margin: 70px 0 50px;
  @media (min-width: ${layoutBreak}px) {
    font-size: 50px;
  }
`;

const FeaturesPage = () => {
  return (
    <Content id="features">
      {features.map((feature, index) => (
        <Cell key={index} feature={feature} reversed={index % 2 === 1} />
      ))}
    </Content>
  );
};

export default FeaturesPage;
