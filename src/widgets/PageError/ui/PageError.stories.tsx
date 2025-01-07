import { PageError, PageErrorProps } from './PageError';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/ThemeContext';

export default {
  title: 'widgets/PageError',
  component: PageError,
};

const Template = (args: PageErrorProps) => <PageError {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const DarkTheme = Template.bind({});
DarkTheme.args = {};
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];
