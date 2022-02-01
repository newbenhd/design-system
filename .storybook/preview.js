import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/theme";
import GlobalStyle from "../src/globalStyle";

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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
