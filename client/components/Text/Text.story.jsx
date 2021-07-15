import React from 'react';
import Text from './Text';

export default {
  title: 'Text',
  component: Text,
};

const Template = ({ text, ...args }) => <Text {...args}>{text}</Text>;

export const Default = Template.bind({});
Default.args = {
  text: 'default',
  size: 'l',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args,
  text: 'secondary',
  theme: 'secondary',
};
