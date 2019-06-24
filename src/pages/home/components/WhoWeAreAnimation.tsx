import * as React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Lottie from "lottie-web";

const Container = styled.div.attrs({
  id: "who_we_are_animation"
})``;

const WhoWeAreAnimation = () => {
  useEffect(() => {
    Lottie.loadAnimation({
      container: document.getElementById("who_we_are_animation")!,
      animationData: require("../../../assets/animations/who_we_are.json"),
      loop: true,
      autoplay: true,
      // @ts-ignore
      assetsPath: "/lottie/who_we_are_images/",
      rendererSettings: {
        viewBoxOnly: true
      }
    });
  }, []);
  return <Container />;
};

export default WhoWeAreAnimation;
