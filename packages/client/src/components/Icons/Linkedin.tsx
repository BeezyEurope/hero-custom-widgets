import React from "react";
import StyledIcon from "./Icon.styles";

const LinkedIn: React.FunctionComponent = (
  props: React.SVGAttributes<any>
): React.ReactElement => {
  return (
    <StyledIcon
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M6.138 17.172H3.13V8.144h3.01v9.028zM4.634 6.439c-1.003 0-1.806-.802-1.806-1.805s.803-1.806 1.806-1.806c1.003 0 1.805.803 1.805 1.806 0 1.003-.802 1.805-1.805 1.805zm12.538 10.733h-3.01v-5.316c0-.803-.701-1.505-1.504-1.505-.802 0-1.505.702-1.505 1.505v5.316H8.144V8.144h3.01v1.204c.501-.802 1.604-1.404 2.507-1.404 1.906 0 3.51 1.605 3.51 3.51v5.718z"
        clipRule="evenodd"
      />
    </StyledIcon>
  );
};

export default LinkedIn;
