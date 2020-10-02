import React, { useEffect, useRef } from "react";
import getAdaptiveCard, {
  AdaptiveCardsParams,
} from "./helpers/getAdaptiveCard";
import addContentToFragment from "./helpers/addContentToFragment";

import StyledAdaptiveCards from "./AdaptiveCards.styles";

export type AdaptiveCardsProps = AdaptiveCardsParams & {
  css?: string;
};

const AdaptiveCards: React.FC<AdaptiveCardsProps> = ({
  data,
  hostConfig,
  schema,
  css,
}: AdaptiveCardsProps): React.ReactElement => {
  const ref = useRef<HTMLIFrameElement>();

  useEffect(() => {
    const adaptiveCard: HTMLElement = getAdaptiveCard({
      data,
      hostConfig,
      schema,
    });

    const iframeDocument = ref.current.contentDocument;

    iframeDocument &&
      addContentToFragment({
        iframeDocument,
        html: adaptiveCard.outerHTML,
        css,
      });
  }, [data, hostConfig, schema, css]);

  // eslint-disable-next-line jsx-a11y/iframe-has-title
  return <StyledAdaptiveCards ref={ref} />;
};

AdaptiveCards.defaultProps = {
  css: "",
};

export default AdaptiveCards;
