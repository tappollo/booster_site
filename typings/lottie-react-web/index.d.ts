declare module "lottie-react-web" {
  import { Component } from "react";

  export interface LottieProps {
    options: {
      animationData: any;
      loop?: boolean;
      autoplay?: boolean;
    };
    width?: number | string;
    height?: number | string;
  }

  export default class Lottie extends Component<LottieProps> {}
}
