import styled, { css } from "styled-components";
import { rem, rgba } from "polished";
import { spaces, colors, borderRadius, wideBlockTablet, narrowBlockTablet } from "../../../styles/constants/index";

interface LoadingDiv extends React.HTMLAttributes<HTMLDivElement> {
  postTitle?: boolean;
  postText?: boolean;
}

const StyledLoadingContainer = styled.div`
  margin: auto 0 ${rem(spaces.medium)};

  @media ${narrowBlockTablet}, ${wideBlockTablet} {
    margin-bottom: ${rem(spaces.small)};
  }
`;

const StyledLoading = styled.div<LoadingDiv>`
  background-color: ${rgba(colors.white, .3)};
  border-radius: ${rem(borderRadius.defaultBorderRadius)};
  height: ${rem(16)};
  overflow: hidden;

  &::after {
    animation: loading 2s infinite;
    background: linear-gradient(90deg, transparent, ${rgba(colors.white, .5)}, transparent);
    content: '';
    display: block;
    height: 100%;
    transform: translateX(-100%);
    width: 100%;

    @keyframes loading {
      to {
        transform: translateX(100%);
      }
    }
  }

  ${({ postTitle }) =>
    postTitle &&
    css`
      max-width: ${rem(160)};
  `}

  ${({ postText }) =>
    postText &&
    css`
      margin-top: ${rem(12)};
      max-width: ${rem(400)};
  `}
`;

export { StyledLoadingContainer, StyledLoading };