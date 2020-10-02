import { css, SimpleInterpolation } from "styled-components";
import { rem } from "polished";

import { typography } from "../constants/index";

const defaultProperties = {
  sizeValue: typography.fontBase,
  lineValue: typography.lineHeightBase,
  important: false,
};

const fontProperties: (properties?: {
  important?: boolean;
  sizeValue: number;
  lineValue: number;
}) => ReadonlyArray<SimpleInterpolation> = (
  properties: {
    important?: boolean;
    sizeValue: number;
    lineValue: number;
  } = defaultProperties
) => {
  const { sizeValue, lineValue, important } = properties;
  return css`
    font-size: ${rem(sizeValue)};
    line-height: ${lineValue} ${important ? "!important" : ""};
  `;
};

export default fontProperties;
