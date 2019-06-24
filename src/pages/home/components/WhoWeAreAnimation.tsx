import * as React from "react";
import { useEffect, useRef } from "react";
import Lottie from "lottie-web";

const WhoWeAreAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: ref.current!,
      animationData: require("../../../assets/animations/who_we_are.json"),
      loop: true,
      autoplay: true,
      // @ts-ignore
      assetsPath: "lottie/who_we_are_images/",
      rendererSettings: {
        viewBoxOnly: true
      }
    });
  }, []);
  return <div ref={ref} />;
};

export default WhoWeAreAnimation;
