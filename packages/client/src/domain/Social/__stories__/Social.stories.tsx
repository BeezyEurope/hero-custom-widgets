import React from "react";
import { Story } from "@storybook/react/types-6-0";

import GlobalStyles from "../../../styles/GlobalStyle";
import Social, { SocialProps } from "../Social";

export default {
  title: "Social",
  component: Social,
  argTypes: {
    error: { control: "boolean" },
    loading: { control: "boolean" },
    posts: { control: "array" },
    user: "manolo",
  },
};

const Template: Story<SocialProps> = (props: SocialProps) => {
  return (
    <div>
      <Social {...props} />
      <GlobalStyles />
    </div>
  );
};

export const SocialWidget = Template.bind({});

SocialWidget.args = {
  error: true,
  loading: false,
  posts: [],
  user: "manolo",
};
