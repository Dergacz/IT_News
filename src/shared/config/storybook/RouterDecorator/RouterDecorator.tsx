import { ReactRenderer } from '@storybook/react/*';
import { BrowserRouter } from 'react-router-dom';
import { PartialStoryFn } from 'storybook/internal/types';
import React from 'react';

export const RouterDecorator = (Story: PartialStoryFn<ReactRenderer>) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
); 
