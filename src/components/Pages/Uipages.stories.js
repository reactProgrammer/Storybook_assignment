import React from 'react';
import Uipages from './Uipages';
import Form from '../Form/Form.stories';

export default {
    title: 'Pages/Ui-pages',
    component: Uipages,
  };

const Template=args=><Uipages {...args}/>

export const Login_Form = Template.bind({});
Login_Form.args={
    formdata:{...Form.LoginForm.args}
}
