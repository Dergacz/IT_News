import { Theme } from 'app/providers/ThemeProvider/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Navbar, NavbarProps } from './Navbar';

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
