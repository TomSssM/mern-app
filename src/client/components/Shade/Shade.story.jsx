import React from 'react';
import Shade from './Shade';

export default {
  title: 'Shade',
  component: Shade,
  argTypes: {
    color: { control: 'color' },
  },
  args: {
    direction: 'top',
  },
};

const Container = ({ children }) => (
  <div style={{ display: 'flex' }}>{children}</div>
);

const Card = ({ children }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '70px',
      height: '30px',
      background: '#ccc',
    }}
  >
    {children}
  </div>
);

export const Default = args => (
  <Container>
    <Shade {...args}>
      <Card>text</Card>
    </Shade>
  </Container>
);

export const Fade = args => (
  <Container>
    <Shade {...args}>
      <span>text</span>
    </Shade>
  </Container>
);
Fade.args = {
  direction: 'right',
  size: 200,
};
