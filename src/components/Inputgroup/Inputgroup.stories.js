import React from 'react';
import Inputgroup from './Inputgroup.js'
import * as Inputstories from '../Input/Input.stories.js';


export default {
    title: 'Molecules/Inputgroup',
    component: Inputgroup,
   /* decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],*/
  };

const Template=args=><Inputgroup {...args}/>

export const userName = Template.bind({});
userName.args={
    ...Inputstories.Textfield.args,id:1
}

export const email = Template.bind({});
email.args={
     ...Inputstories.Emailfield.args,id:2
}

export const password = Template.bind({});
password.args={
   ...Inputstories.Passwordfield.args,id:3
}