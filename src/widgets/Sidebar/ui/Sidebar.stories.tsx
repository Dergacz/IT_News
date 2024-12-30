import React from 'react';
import { Sidebar, SidebarProps } from './Sidebar';
import { Theme } from 'app/providers/ThemeProvider/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
};

const Template = (args: SidebarProps) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const DarkTheme = Template.bind({});
DarkTheme.args = {};
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];
