import React from 'react';
import { Navbar, NavbarProps } from './Navbar';
import { Theme } from 'app/providers/ThemeProvider/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
};

const Template = (args: NavbarProps) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const DarkTheme = Template.bind({});
DarkTheme.args = {};
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];
