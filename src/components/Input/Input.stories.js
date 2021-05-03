import React from 'react';
import Input  from './Input';

export default {
  title: 'atoms/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Textfield = Template.bind({});
Textfield.args = {
  
    type:'text', 
    placeholder:'Please Enter Username',
    name:'username',
    label:'UserName',
    value:'ashwini'
    /*input:{ }*/
};

export const Emailfield = Template.bind({});
Emailfield.args = {
  
    type:'email', 
    placeholder:'Please Enter Email',
    name:'email',
    label:'Email',
    value:'ashwini.chougule@gmail.com'
   /* input:{ }*/
};

export const Passwordfield = Template.bind({});
Passwordfield.args = {
    type:'password', 
    placeholder:'Please Enter Password',
    name:'password',
    label:'Password',
    value:'123'
};

