import { FC } from "react";
import { rem } from "polished";

import styled, { css } from "styled-components";
import { colors } from "../../styles/constants/index";
import BulletSizes from "./enums/BulletSizes";

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  size?: string;
}

const StyledNavigationList = styled.ol`
  align-items: center;
  bottom: ${rem(-40)};
  display: flex;
  justify-content: center;
  position: relative;
  transition: all 220ms cubic-bezier(0, 1, 1, 1) 120ms;
`;

const StyledNavigationListItem = styled.li`
  display: inline-block;
  flex: 0 0 ${rem(20)};
`;

const StyledNavigationButton: FC<Button> = styled.button<Button>`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: block;
  height: ${rem(32)};
  outline: none;
  padding: 0;
  width: ${rem(20)};

  &:before {
    background-color: ${colors.white};
    border-radius: 50%;
    content: " ";
    display: block;
    height: ${rem(8)};
    margin: auto;
    opacity: .5;
    transition: height .2s ease-in-out, width .2s ease-in-out, opacity .2s ease-in-out;
    width: ${rem(8)};

    ${({ active }) =>
      active &&
      css`
        background-color: ${colors.white};
        opacity: 1;
      `}

    ${({ size }) =>
      size === BulletSizes.SMALL &&
      css`
        width: ${rem(4)};
        height: ${rem(4)};
      `}

    ${({ size }) =>
      size === BulletSizes.MEDIUM &&
      css`
        width: ${rem(6)};
        height: ${rem(6)};
      `}
  }

  &:hover {
    &:before {
      background-color: ${colors.white};
      opacity: 1;
    }
  }
`;

export {
  StyledNavigationList,
  StyledNavigationListItem,
  StyledNavigationButton,
};
