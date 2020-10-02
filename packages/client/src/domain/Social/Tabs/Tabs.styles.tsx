import React from "react";
import styled, { css } from "styled-components";
import { rem, rgba } from "polished";
import { spaces, colors } from "../../../styles/constants/index";
import StyledIcon from "../../../components/Icons/Icon.styles";

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

const StyledIconsList = styled.ul`
  display: flex;
`;

const StyledIconsListItem = styled.li`
  margin-right: ${rem(spaces.xXsmall)};
`;

const activeStyle = ` background-color: ${rgba(colors.dark, .5)};
  ${StyledIcon} {
    opacity: 1;
  }`;

const StyledIconsListButton = styled.button<Button>`
  background-color: ${rgba(colors.dark, .2)};
  border-radius: 50%;
  box-sizing: border-box;
  display: block;
  height: ${rem(34)};
  outline: none;
  padding: ${rem(7)};
  transition: background-color .3s ease-in-out;
  width: ${rem(34)};

  ${({ active }) =>
    active &&
    css`
     ${activeStyle}
    `}

  &:hover,
  &:focus {
    ${activeStyle}
  }
`;

export { StyledIconsList, StyledIconsListItem, StyledIconsListButton };
