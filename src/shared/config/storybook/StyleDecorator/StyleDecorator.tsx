import { ReactRenderer } from '@storybook/react/*';
import { PartialStoryFn } from 'storybook/internal/types';
import 'app/styles/index.scss';

export const StyleDecorator = (Story:PartialStoryFn<ReactRenderer>) => Story();
