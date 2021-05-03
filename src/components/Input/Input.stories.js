import React from 'react';
import Input  from './Input';

export default {
  title: 'atoms/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Textfield = Template.bind({});
Textfield.args = {
   input:{ 
    type:'text', 
    placeholder:'text field',
    name:'username',
    label:'UserName',
    value:'ashwini'
  }
};

export const Emailfield = Template.bind({});
Emailfield.args = {
    input:{ 
    type:'email', 
    placeholder:'Email',
    name:'email',
    label:'Email',
    value:'ashwini.chougule@gmail.com'
    }
};

export const Passwordfield = Template.bind({});
Passwordfield.args = {
    input:{ 
    type:'password', 
    placeholder:'password',
    name:'password',
    label:'Password',
    value:'123'
    }
};

