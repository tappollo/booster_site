import Content from "../../../components/Content";
import { layoutBreak, useMobileLayout } from "../../../functions/styles";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Lottie from "lottie-web";

const Container = styled.div`
  flex-direction: column;
  @media (min-width: ${layoutBreak}px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
`;

interface Benefit {
  animation: any;
  assetPath?: string;
  title: string;
  subtitle: string;
}

const benefits: Benefit[] = [
  {
    animation: require("../../../assets/animations/benefits/01.json"),
    title: "Running APP on Day 1",
    subtitle:
      "Fork the Booster Repo, run the configuration scrips and build, you can get running APPs and start to focus on developing business logics."
  },
  {
    animation: require("../../../assets/animations/benefits/02.json"),
    title: "Native and Web in one shot",
    subtitle:
      "Write code once, you will have the APP in iOS, Android and Mobile Web, save both your time and efforts."
  },
  {
    animation: require("../../../assets/animations/benefits/03.json"),
    title: "See the APP one browser away",
    subtitle:
      "With the mobile web, you can test look and feel, business logic without testing devices, delivery the APP without the hurtles of APP installation."
  },
  {
    animation: require("../../../assets/animations/benefits/04.json"),
    assetPath: "/lottie/benefits_04_images/",
    title: "Off-the-shelf building blocks",
    subtitle:
      "Common components like SMS login, social login, chatting, video player, fast image processing etc have been integrated for you to assemble your business logics."
  },
  {
    animation: require("../../../assets/animations/benefits/05.json"),
    title: "No DevOps in the house? We get you covered!",
    subtitle:
      "Pre-build continuously integration pipeline and continuously delivery infrastructures enables short time to market and fast customer feedback."
  },
  {
    animation: require("../../../assets/animations/benefits/06.json"),
    title: "Power-packed Backend-as-a-Service",
    subtitle:
      "With FireBase, you will get scalability, crash report, data analysis, futuristic APP development features in one place.0"
  }
];

const Cell = (props: {
  benefit: Benefit;
  active: boolean;
  onFocus: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const animation = useRef<ReturnType<typeof Lottie.loadAnimation> | null>(
    null
  );
  useEffect(() => {
    animation.current = Lottie.loadAnimation({
      container: ref.current!,
      animationData: props.benefit.animation,
      autoplay: false,
      // @ts-ignore
      assetsPath: props.benefit.assetPath
    });
  }, []);
  useEffect(() => {
    if (props.active) {
      animation.current!.goToAndPlay(0);
    } else {
      animation.current!.pause();
    }
  }, [props.active]);
  return (
    <Cell.Container
      style={{ opacity: props.active ? 1 : 0.3 }}
      onMouseEnter={props.onFocus}
    >
      <Cell.Logo ref={ref} />
      <div style={{ flex: 1 }}>
        <Cell.Title>{props.benefit.title}</Cell.Title>
        <Cell.Subtitle>{props.benefit.subtitle}</Cell.Subtitle>
      </div>
    </Cell.Container>
  );
};

Cell.Subtitle = styled.p`
  font-family: "SF Compact Display", sans-serif;
  font-size: 15px;
  text-align: center;
  @media (min-width: ${layoutBreak}px) {
    text-align: left;
  }
`;

Cell.Title = styled.h2`
  font-family: "SF Compact Display", sans-serif;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 5px;
  text-align: center;
  @media (min-width: ${layoutBreak}px) {
    font-size: 27px;
    text-align: left;
  }
`;

Cell.Logo = styled.div`
  margin-bottom: 24px;
  width: 110px;
  height: 110px;
  @media (min-width: ${layoutBreak}px) {
    margin-right: 30px;
  }
`;

Cell.Container = styled.div`
  min-height: 120px;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  @media (min-width: ${layoutBreak}px) {
    width: 50%;
    padding: 0 50px;
    flex-direction: row;
    transition: opacity 0.3s ease-in-out;
  }
`;

const BenefitsPage = () => {
  const mobileLayout = useMobileLayout();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex(i => i + 1);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [index]);
  return (
    <Content>
      <Container
        style={{ minHeight: mobileLayout ? "none" : window.innerHeight }}
      >
        {benefits.map((benefit, i) => (
          <Cell
            key={benefit.title}
            benefit={benefit}
            active={mobileLayout || index === i}
            onFocus={() => setIndex(i)}
          />
        ))}
      </Container>
    </Content>
  );
};

export default BenefitsPage;
