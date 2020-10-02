import React, { SVGProps } from "react";

const Refresh: React.FC<React.SVGProps<any>> = (
  props: SVGProps<any>
): React.ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M14.708 5.292C13.5 4.083 11.842 3.333 10 3.333c-3.683 0-6.658 2.984-6.658 6.667S6.317 16.667 10 16.667c3.108 0 5.7-2.125 6.442-5h-1.734C14.025 13.608 12.175 15 10 15c-2.758 0-5-2.242-5-5s2.242-5 5-5c1.383 0 2.617.575 3.517 1.483l-2.684 2.684h5.834V3.333l-1.959 1.959z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Refresh;
