import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";
export default {
  title: "Atoms/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: "primary",
  label: "Button",
};

export const BuySellButton = Template.bind({});
BuySellButton.args = {
  label: "Buy / Sell",
  type: "primary",
};

export const SendReceiveButton = Template.bind({});
SendReceiveButton.args = {
  size: "large",
  label: "Send / Receive",
  type: "secondary",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Small Button",
};
