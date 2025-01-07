import { Theme } from 'app/providers/ThemeProvider/ThemeContext';
import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonVariant } from './Button';

interface ButtonStoryArgs {
  children: React.ReactNode;
  variant: ButtonVariant;
  className?: string;
}

export default {
  title: 'shared/Button',
  component: Button,
};

const Template = (args: ButtonStoryArgs) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  variant: ButtonVariant.Primary,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Primary Dark Button',
  variant: ButtonVariant.Primary,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  variant: ButtonVariant.Secondary,
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'Secondary Dark Button',
  variant: ButtonVariant.Secondary,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
  children: 'Clear Button',
  variant: ButtonVariant.Clear,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Clear Button',
  variant: ButtonVariant.Clear,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];
