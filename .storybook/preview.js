import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/theme";
import GlobalStyle from "../src/globalStyle";
import ErrorBoundries from '../src/utils/ui-hocs/ErrorBoundaries';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    showPanel: true,
    storySort: {
      method: "alphabetical",
      order: [
        "Documentation",
        ["Read Me", "Changelog", "Migration"],
        "Atoms",
        "Molecules",
        "Organisms",
        "Templates",
        "Pages",
        "Data Visualization",
      ],
    },
  },
};

export const decorators = [
  (Story) => (
    <ErrorBoundries fallbackComponent={<p>Something went wrong on storybook...please try it again later</p>}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
    </ErrorBoundries>
  ),
];
