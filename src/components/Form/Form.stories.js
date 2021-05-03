import React from 'react';
import Form from './Form.js';
import * as Inputgroups from '../Inputgroup/Inputgroup.stories.js';
import * as Button from '../Button/Button.stories';

export default {
    title: 'Organisms/Form',
    component: Form,
  };

const Template=args=><Form {...args}/>

export const LoginForm = Template.bind({});
LoginForm.args={
    Inputgroupsdata:[{...Inputgroups.userName.args},{...Inputgroups.password.args},],
    button:{...Button.Default.args}
}
