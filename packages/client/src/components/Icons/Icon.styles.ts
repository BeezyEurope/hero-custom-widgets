import styled from "styled-components";
import { colors } from "../../styles/constants";

const StyledIcon = styled.svg`
  fill: ${colors.white};
  height: rem(20);
  opacity: 0.6;
  transition: opacity 0.3s ease-in-out;
  width: rem(20);
`;

export default StyledIcon;
