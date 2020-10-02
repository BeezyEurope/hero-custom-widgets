import { css } from "styled-components";
import { rem } from "polished";
import isIE from "../../utils/isIE";

const maxLines = ({ lines, fontSize, lineHeight }) => {
  if (isIE()) {
    return css`
      height: ${rem(fontSize * lineHeight * lines)};
      overflow: hidden;
    `;
  }

  return css`
    /* If we are not in IE, we use webkit specific properties and values to apply max line size */
    /* stylelint-disable-next-line value-no-vendor-prefix */
    display: -webkit-box;
    overflow: hidden;
    /* stylelint-disable-next-line property-no-vendor-prefix, order/properties-alphabetical-order */
    -webkit-box-orient: vertical;
    /* stylelint-disable-next-line property-no-vendor-prefix, order/properties-alphabetical-order */
    -webkit-line-clamp: ${lines};
  `;
};

export default maxLines;
