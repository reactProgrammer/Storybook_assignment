import React from 'react';
import Uipages from './Uipages.js';
import * as Form from '../Form/Form.stories';

export default {
    title: 'Pages/Uipages',
    component: Uipages,
  };

const Template=args=><Uipages {...args}/>

export const Login_page = Template.bind({});
Login_page.args={
    formdata:{...Form.LoginForm.args}
}

export const Registration_page = Template.bind({});
Registration_page.args={
    formdata:{...Form.RegistrationForm.args}
}

