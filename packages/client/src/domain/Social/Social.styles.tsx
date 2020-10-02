import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { colors, spaces, narrowBlockDesktop, wideBlockTablet, narrowBlockTablet, blockMobile} from "../../styles/constants/index";
import { StyledNavigationList } from "../../components/Bullets/Bullets.styles";

interface FixedDiv extends React.HTMLAttributes<HTMLDivElement> {
  fixed?: boolean;
}

const StyledMainContainer = styled.div<FixedDiv>`
  background-color: ${colors.primary};
  box-sizing: border-box;
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  overflow: hidden;
  padding: ${rem(spaces.medium)} ${rem(spaces.medium)} 0;

  &:hover {
    ${StyledNavigationList} {
      bottom: auto;
      margin-bottom: ${rem(spaces.xXsmall)};
      position: static;
    }
  }

  @media ${wideBlockTablet} {
    padding: ${rem(spaces.small)} ${rem(spaces.small)} 0;

    ${StyledNavigationList} {
      bottom: auto;
      margin-bottom: ${rem(spaces.xXsmall)};
      position: static;
    }
  }

  @media ${narrowBlockDesktop} {
    &:hover {
      ${StyledNavigationList} {
        bottom: auto;
        margin: ${rem(spaces.xXsmall)} 0;
        position: static;
      }
    }
  }

  @media ${narrowBlockTablet} {
    &,
    &:hover {
      padding: ${rem(spaces.small)} ${rem(spaces.small)} 0;

      ${StyledNavigationList} {
        bottom: auto;
        margin: ${rem(spaces.xXsmall)} 0;
        position: static;
      }
    }
  }

  @media ${blockMobile} {
    &,
    &:hover {

      ${StyledNavigationList} {
        bottom: auto;
        margin: ${rem(spaces.xXsmall)} 0;
        position: static;
      }
    }
  }
`;

const StyledPosts = styled.div<FixedDiv>`
  margin-top: auto;
  display: flex;
  pointer-events: ${({ fixed }) => (fixed ? "none" : "")};
`;

export { StyledMainContainer, StyledPosts };
