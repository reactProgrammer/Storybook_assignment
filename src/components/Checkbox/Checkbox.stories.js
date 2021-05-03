import React from 'react';

import { Checkbox } from './Checkbox';


export default {
  title: 'atoms/Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Checked = Template.bind({});
Checked.args = {
    type:'checkbox',
    checked:true
};


export const Unchecked = Template.bind({});
Unchecked.args = {
    type:'checkbox',
    checked:false
};
