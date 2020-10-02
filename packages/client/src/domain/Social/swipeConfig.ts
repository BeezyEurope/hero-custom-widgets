import { SwipeableOptions } from "react-swipeable";

type SwipeConfigParams = {
  setSwipping: (boolean) => void;
  mainElement: any;
  marginLeftSwipe: any;
  setActive: (number) => void;
  length: number;
};
const swipeConfig = ({
  setSwipping,
  mainElement,
  marginLeftSwipe,
  setActive,
  length,
}: SwipeConfigParams): SwipeableOptions => {
  return {
    preventDefaultTouchmoveEvent: true,
    delta: 1,
    trackMouse: true,
    rotationAngle: 180,
    onSwiping: (event) => {
      setSwipping(true);

      const mainEl = (mainElement &&
        mainElement.current &&
        mainElement.current.style) || { marginLeft: 0 };

      const MAX_MARGIN_LEFT = 100 * (length - 1);

      const newWidth = mainElement.current
        ? ((event.deltaX * 0.05) / mainElement.current.offsetWidth) * 100
        : 0;

      const newMargin = marginLeftSwipe.current + newWidth;

      // eslint-disable-next-line no-param-reassign
      marginLeftSwipe.current = newMargin >= 0 ? 0 : newMargin;

      // eslint-disable-next-line no-param-reassign
      marginLeftSwipe.current =
        Math.abs(marginLeftSwipe.current) >= MAX_MARGIN_LEFT
          ? -MAX_MARGIN_LEFT
          : marginLeftSwipe.current;

      mainEl.transform = !marginLeftSwipe.current
        ? "auto"
        : `translateX(${marginLeftSwipe.current}vw)`;
    },
    onSwipedLeft: () => {
      setActive((current) => {
        if (current === 0) {
          return current;
        }
        // eslint-disable-next-line no-param-reassign
        marginLeftSwipe.current = -100 * (current - 1);

        const mainEl = (mainElement &&
          mainElement.current &&
          mainElement.current.style) || { marginLeft: 0 };

        mainEl.transform = `translateX(${marginLeftSwipe.current}vw)`;
        return current - 1;
      });
    },
    onSwipedRight: () => {
      setActive((current) => {
        if (current === length - 1) {
          return current;
        }
        // eslint-disable-next-line no-param-reassign
        marginLeftSwipe.current = -100 * (current + 1);

        const mainEl = (mainElement &&
          mainElement.current &&
          mainElement.current.style) || { marginLeft: 0 };

        mainEl.transform = `translateX(${marginLeftSwipe.current}vw)`;

        return current + 1;
      });
    },
    onSwiped: () => {
      setSwipping(false);
    },
  };
};

export default swipeConfig;
