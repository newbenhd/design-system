import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GlobalStateProvider from "../../../utils/ui-hocs/GlobalStateProvider";

import SearchInput from "./SearchInput";
export default {
  title: "Molecules/SearchInput",
  component: SearchInput,
  decorators: [
    (Story) => (
      <GlobalStateProvider>
        <Story />
      </GlobalStateProvider>
    ),
  ],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SearchInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchInput> = (args) => (
  <SearchInput {...args} />
);

export const Default = Template.bind({});

export const SearchAssets = Template.bind({});
SearchAssets.args = {
  placeholder: "Search all assets",
};
