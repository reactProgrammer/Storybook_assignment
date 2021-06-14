import React from 'react';
import { linkTo } from '@storybook/addon-links';
import withEvents from '@storybook/addon-events';
import Button  from './Button';

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    primary: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    onClick: { action: 'onClick' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  jest: ['Button.test.js'],
  /*onClick:linkTo('Button', 'Default')*/
};


export const Default = Template.bind({});
Default.args = {
  primary: true,
  label:'Login button text',
  backgroundColor:'#333333'
};

export const Registered = Template.bind({});
Registered.args = {
  primary: true,
  label: 'Registered',
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



