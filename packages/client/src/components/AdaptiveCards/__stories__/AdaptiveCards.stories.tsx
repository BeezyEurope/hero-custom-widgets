import React from "react";
import { Story } from "@storybook/react/types-6-0";

import AdaptiveCards, { AdaptiveCardsProps } from "../AdaptiveCards";
import { css, hostconfig, json, data } from "./stock";

export default {
  title: "AdaptiveCards",
  component: AdaptiveCards,
};

const Template: Story<AdaptiveCardsProps> = (args) => (
  <AdaptiveCards {...args} />
);

export const Stock = Template.bind({});

Stock.args = {
  hostConfig: hostconfig,
  schema: json,
  css,
  data
};
