import { ReactRenderer } from "@storybook/react/*";
import { Theme } from "app/providers/ThemeProvider/ThemeContext";
import { PartialStoryFn } from "storybook/internal/types";
import React from "react";

export const ThemeDecorator = (theme: Theme) => {
  const DecoratedStory = (Story: PartialStoryFn<ReactRenderer>) => (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );

  DecoratedStory.displayName = "ThemeDecorator";

  return DecoratedStory;
};
