import {useMediaQuery} from "react-responsive";


export const shrinkBreak = 1224;
export const layoutBreak = 768;

export const useMobileLayout = () => {
  return !useMediaQuery({ query: `(min-width: ${layoutBreak}px)` });
};
