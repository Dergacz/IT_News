import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkVariants } from './AppLink';
import { Theme } from 'app/providers/ThemeProvider/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
    title: 'Test Link',
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: AppLinkVariants.Primary,
  },
};

export const PrimaryDark: Story = {
  args: {
    variant: AppLinkVariants.Primary,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Secondary: Story = {
  args: {
    variant: AppLinkVariants.Secondary,
  },
};

export const SecondaryDark: Story = {
  args: {
    variant: AppLinkVariants.Secondary,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
