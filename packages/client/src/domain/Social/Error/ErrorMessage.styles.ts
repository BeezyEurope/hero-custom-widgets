import React from "react";
import Styled from "styled-components";
import { rem, rgba } from "polished";

import { fontProperties } from "../../../styles/mixins/index";
import typography from "../../../styles/constants/typography";
import colors from "../../../styles/constants/colors";
import { spaces, blockMobile, narrowBlockTablet } from "../../../styles/constants/index";

export const StyledContainer: React.FC = Styled.div`
  margin: auto 0;
`;

export const StyledRow: React.FC = Styled.p`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  text-align: center;

  @media ${blockMobile}, ${narrowBlockTablet} {
    align-items: center;
    flex-direction: column;
  }
`;

export const StyledText = Styled.span`
  ${fontProperties({
    lineValue: typography.lineHeightXLarge,
    sizeValue: typography.fontMedium
  })};
  font-weight: ${typography.fontWeightSemibold};
  margin: ${rem(1)} 0 0 ${rem(spaces.xXsmall)};
  opacity: .9;

  @media ${blockMobile}, ${narrowBlockTablet} {
    display:block;
    margin: ${rem(spaces.xXsmall)} 0 0;
  }
`;

export const StyledRefreshContainer: React.FC<React.ButtonHTMLAttributes<
  HTMLButtonElement
>> = Styled.button<React.ButtonHTMLAttributes<HTMLButtonElement>>`
  align-items: center;
  border-radius: ${rem(6)};
  display: inline-flex;
  padding: ${rem(5)} ${rem(12)};
  margin-top: ${rem(spaces.xXsmall)};
  transition: background-color .2s ease-in-out;

  &:hover{
    background-color: ${rgba(colors.black, .08)};
  }

  &:focus,
  &:active {
    outline: none;
    background-color: ${rgba(colors.black, .15)};
  }
`;

export const StyledButtonText = Styled.span`
  ${fontProperties({
    lineValue: typography.lineHeightXsmall,
    sizeValue: typography.fontXsmall
  })};
  display: inline-block;
  font-weight: ${typography.fontWeightSemibold};
  padding: ${rem(1)} 0 0 ${rem(4)};
`;