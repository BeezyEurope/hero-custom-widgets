import React from "react";

import {
  StyledText,
  StyledButtonText,
  StyledContainer,
  StyledRow,
  StyledRefreshContainer,
} from "./ErrorMessage.styles";
import Warning from "../../../components/Icons/Warning";
import Refresh from "../../../components/Icons/Refresh";

type ErrorMessageProps = {
  onRefresh: (e: any) => void;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  onRefresh,
}: ErrorMessageProps): React.ReactElement => {
  return (
    <StyledContainer>
      <StyledRow>
        <Warning />
        <StyledText>Could not load content.</StyledText>
      </StyledRow>
      <StyledRow>
        <StyledRefreshContainer onClick={onRefresh}>
          <Refresh />
          <StyledButtonText>Refresh</StyledButtonText>
        </StyledRefreshContainer>
      </StyledRow>
    </StyledContainer>
  );
};

export default ErrorMessage;
