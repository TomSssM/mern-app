import React from 'react';
import StoryRouter from 'storybook-react-router';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [StoryRouter()],
  args: {
    theme: 'clear',
    type: 'button',
    size: 'l',
    onClick: () => {},
  },
};

const Template = ({ text, ...args }) => <Button {...args}>{text}</Button>;

export const Default = Template.bind({});
Default.args = {
  text: 'Default',
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: 'Primary',
  theme: 'action',
};

export const Navigation = Template.bind({});
Navigation.args = {
  type: 'router',
  text: 'Navigation',
  to: '/test',
};
