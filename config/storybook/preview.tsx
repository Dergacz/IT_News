import type { Preview } from "@storybook/react";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { Theme } from "app/providers/ThemeProvider/ThemeContext";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    StyleDecorator,
    RouterDecorator,
    (Story) => ThemeDecorator(Theme.LIGHT)(Story)
  ],
};

export default preview;
