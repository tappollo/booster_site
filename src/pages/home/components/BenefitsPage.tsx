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
    title: "Fully functional app in minutes",
    subtitle:
      "Get a fully functional app with common features such\n" +
      "as social login, sign up, settings, push notifications\n" +
      "and many more in minutes, so you can focus on the\n" +
      "things that differentiate your app from the rest\n" +
      "immediately."
  },
  {
    animation: require("../../../assets/animations/benefits/02.json"),
    title: "The Power of Native Web",
    subtitle:
      "Develop and deploy your iOS and Android apps\n" +
      "using React Native. You can even preview your app\n" +
      "in your web browser without having to install the\n" +
      "app. It feels like magic."
  },
  {
    animation: require("../../../assets/animations/benefits/03.json"),
    title: "Over the air update",
    subtitle:
      "Release incremental updates and fixes to your app\n" +
      "without having to resubmit your app. Did we say it felt\n" +
      "like magic?"
  },
  {
    animation: require("../../../assets/animations/benefits/04.json"),
    assetPath: "lottie/benefits_04_images/",
    title: "Prebuilt components",
    subtitle:
      "Booster comes with prebuilt components such as\n" +
      "SMS login, social login, text chat, video player, image\n" +
      "processing services, etc so you can build your app in\n" +
      "unprecedented speed at a fraction of the cost."
  },
  {
    animation: require("../../../assets/animations/benefits/05.json"),
    title: "CI/CD integrations",
    subtitle:
      "No DevOps in the house? We got you covered. Booster\n" +
      "comes with pre-built continuous integration (CI)\n" +
      "pipeline and continuous delivery (CD) infrastructures\n" +
      "Your code base get the lint check and unit test\n" +
      "treatments it deserves. Booster automates the\n" +
      "uploading of pre-release builds to Hockey and release\n" +
      "builds to the App Store and Google Play."
  },
  {
    animation: require("../../../assets/animations/benefits/06.json"),
    title: "Scalability, analytics, A/B testing,\ncrash reporting from day one",
    subtitle:
      "Have to serve 100,000 users on day one? Not a\n" +
      "problem. Booster leverages the power of Google Cloud\n" +
      "and Firebase to provide you with scalability and myriad\n" +
      "of features (analytics, A/B testing, crash reporting\n" +
      "etc.) from day one."
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
  const mobileLayout = useMobileLayout();
  useEffect(() => {
    animation.current = Lottie.loadAnimation({
      name: props.benefit.title,
      container: ref.current!,
      animationData: props.benefit.animation,
      autoplay: false,
      loop: mobileLayout,
      // @ts-ignore
      assetsPath: props.benefit.assetPath
    });
    return () => {
      Lottie.destroy(props.benefit.title);
    };
  }, [
    props.benefit.assetPath,
    props.benefit.animation,
    props.benefit.title,
    mobileLayout
  ]);
  useEffect(() => {
    if (props.active) {
      animation.current!.goToAndPlay(0);
    } else {
      animation.current!.pause();
    }
  }, [props.active]);
  return (
    <Cell.Container
      style={{ opacity: props.active ? 1 : 0.7 }}
      onMouseEnter={props.onFocus}
    >
      <Cell.Logo ref={ref} />
      <div style={{ flex: 1 }}>
        <Cell.Title>{props.benefit.title}</Cell.Title>
        <Cell.Subtitle>
          {props.benefit.subtitle.replace("\n", " ")}
        </Cell.Subtitle>
      </div>
    </Cell.Container>
  );
};

Cell.Subtitle = styled.p`
  font-family: "Hind Guntur", sans-serif;
  font-size: 15px;
  text-align: center;
  line-height: 20px;
  @media (min-width: ${layoutBreak}px) {
    text-align: left;
  }
`;

Cell.Title = styled.h2`
  font-family: "Hind Guntur", sans-serif;
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
    margin-bottom: 0;
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
    <Content id="benefits">
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
