import * as AdaptiveCards from "adaptivecards";
import * as ACData from "adaptivecards-templating";
import { AdaptiveCard } from "adaptivecards";

export interface AdaptiveCardsParams {
  schema: any;
  data?: any;
  hostConfig?: any;
}

function getAdaptiveCard({
  schema,
  data = {},
  hostConfig = {},
}: AdaptiveCardsParams): HTMLElement {
  const template = new ACData.Template(schema);

  const card = template.expand({
    $root: data,
  });

  const adaptiveCard: AdaptiveCard = new AdaptiveCards.AdaptiveCard();

  adaptiveCard.hostConfig = new AdaptiveCards.HostConfig(hostConfig);
  adaptiveCard.parse(card);

  return adaptiveCard.render();
}

export default getAdaptiveCard;
