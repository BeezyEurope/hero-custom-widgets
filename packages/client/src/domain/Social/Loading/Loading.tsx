/* eslint-disable jsx-a11y/aria-role */
import React, { Fragment } from "react";
import { StyledLoadingContainer, StyledLoading } from "./Loading.styles";

const Loading = () => {
  return (
    <StyledLoadingContainer role="loading">
      <StyledLoading postTitle />
      <StyledLoading postText />
    </StyledLoadingContainer>
  );
};

export default Loading;
