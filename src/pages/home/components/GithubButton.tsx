import styled from "styled-components";
import React from "react";
import { layoutBreak } from "../../../functions/styles";

const Container = styled.div`
  flex-direction: row;
  justify-content: center;
  padding: 20px;
  margin: 30px 0 100px;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.img.attrs({
  src: require("../../../assets/images/Github.png"),
  alt: "Github"
})`
  width: 50px;
  height: 50px;
  @media (min-width: ${layoutBreak}px) {
    width: 80px;
    height: 80px;
  }
`;

const Title = styled.h4`
  font-family: "SF Compact Display", sans-serif;
  font-weight: 600;
  margin-right: 30px;
  text-align: right;
`;

const GithubButton = () => (
  <Container
    onClick={() => {
      window.open("https://github.com/tappollo/booster", "_blank");
    }}
  >
    <Title>Source code available on Github</Title>
    <Icon />
  </Container>
);

export default GithubButton;
