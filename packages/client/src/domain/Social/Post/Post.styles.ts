import styled from "styled-components";
import { ellipsis, rem } from "polished";

import TimeAgo from "../../../components/TimeAgo/TimeAgo";
import {
  typography,
  narrowBlockDesktop,
  narrowBlockTablet,
  blockMobile,
  wideBlockTablet
} from "../../../styles/constants/index";
import fontProperties from "../../../styles/mixins/fontProperties";
import { maxLines } from "../../../styles/mixins/index";

const StyledContentText = styled.p`
  ${fontProperties({
    sizeValue: typography.fontMedium,
    lineValue: typography.lineHeightXLarge
  })};
  ${maxLines({
    lines: 3,
    fontSize: typography.fontMedium,
    lineHeight: typography.lineHeightXLarge
  })}
  font-weight: ${typography.fontWeightRegular};

  @media ${narrowBlockDesktop} {
    ${maxLines({
      lines: 5,
      fontSize: typography.fontMedium,
      lineHeight: typography.lineHeightXLarge
    })}
  }

  @media ${narrowBlockTablet}, ${blockMobile} {
    ${maxLines({
      lines: 7,
      fontSize: typography.fontBase,
      lineHeight: typography.lineHeightXLarge
    })}
  }

  @media ${wideBlockTablet}, ${narrowBlockTablet} {
    ${fontProperties({
      sizeValue: typography.fontBase,
      lineValue: typography.lineHeightLarge
    })}
  }

  @media ${wideBlockTablet} {
    ${maxLines({
      lines: 3,
      fontSize: typography.fontBase,
      lineHeight: typography.lineHeightLarge
    })}
  }
`;

const StyledContentUserTime = styled.p`
  ${ellipsis("100%")};
  ${fontProperties({
    sizeValue: typography.fontBase,
    lineValue: typography.lineHeightLarge
  })}
  font-weight: ${typography.fontWeightBold};
  margin-bottom: ${rem(5)};

  @media ${wideBlockTablet}, ${narrowBlockTablet} {
    ${fontProperties({
      sizeValue: typography.fontXsmall,
      lineValue: typography.lineHeightXxSmall
    })}
  }
`;

const StyledContentTime = styled(TimeAgo)`
  font-weight: ${typography.fontWeightSemibold};
  opacity: .7;
  padding-left: ${rem(5)};
`;

export { StyledContentText, StyledContentTime, StyledContentUserTime };
