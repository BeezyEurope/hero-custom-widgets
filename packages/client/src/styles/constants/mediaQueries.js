import { rem } from "polished";

const screenSizes = {
  mobileLandscape: "480px",
  tabletPortrait: "768px",
  tabletLandscape: "992px",
  desktop: "1200px",
};

const mediaQueries = {
  mobileLandscape: `(min-width: ${screenSizes.mobileLandscape})`,
  tabletPortrait: `(min-width: ${screenSizes.tabletPortrait})`,
  tabletLandscape: `(min-width: ${screenSizes.tabletLandscape})`,
  desktop: `(min-width: ${screenSizes.desktop})`,
};

// Wide block tablet and desktop
const wideBlock = `screen and (min-height: ${rem(218)}) and (max-height: ${rem(218)})`;

// Narrow block tablet and desktop
const narrowBlock = `screen and (min-height: ${rem(331)}) and (max-height: ${rem(333)})`;

// Narrow block Desktop
const narrowBlockDesktop = `screen and (min-height: ${rem(332)}) and (min-width: ${rem(301)})`;

/*Wide block desktop */
const wideBlockDesktop = `screen and (min-width: ${rem(405)}) and (min-height: ${rem(217)}) and (max-height: ${rem(219)})`;

// Narrow block Tablet
/** Range of withs for narrowBlockTablet: (min-width: ${rem(240)}) and (max-width: ${rem(303)}) */
const narrowBlockTablet = `screen and (min-width: ${rem(240)}) and (max-width: ${rem(303)}) and (max-height: ${rem(332)})`;

// Wide block Tablet
const wideBlockTablet = `screen and (max-width: ${rem(407)}) and (min-height: ${rem(216)}) and (max-height: ${rem(219)})`;

/* Block mobile */
const blockMobile = `screen and (min-height: ${rem(445)}) and (min-width: ${rem(334)})`;

export {
  mediaQueries,
  wideBlock,
  narrowBlock,
  wideBlockDesktop,
  wideBlockTablet,
  narrowBlockTablet,
  narrowBlockDesktop,
  blockMobile,
};
