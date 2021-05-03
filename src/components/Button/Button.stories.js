import React from 'react';
import Button  from './Button';

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label:'Login',
  backgroundColor:'#333333'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const CustomeColor = Template.bind({});
CustomeColor.args = {
  backgroundColor:"coral",
  label: 'custom color',
};
