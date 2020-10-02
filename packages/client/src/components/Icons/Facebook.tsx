import React from "react";
import StyledIcon from "./Icon.styles";


const Facebook: React.FunctionComponent = (props: React.SVGAttributes<any>): React.ReactElement => {
  return (
    <StyledIcon
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M13.984 2.828v2.69h-1.793c-.538 0-.896.358-.896.896v1.793h2.69v2.69h-2.69v6.275h-2.69v-6.276H6.812V8.207h1.793V5.966c0-1.704 1.435-3.138 3.138-3.138h2.241z"
        clipRule="evenodd"
      />
    </StyledIcon>
  );
};

export default Facebook;
