import React, { SVGProps } from "react";

const Warning: React.FC<React.SVGProps<any>> = (
  props: SVGProps<any>
): React.ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M12 20c-4.416 0-8-3.584-8-8s3.584-8 8-8 8 3.584 8 8-3.584 8-8 8zm1-13h-2v6h2V7zm0 8h-2v2h2v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Warning;
