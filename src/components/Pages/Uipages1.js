import React from 'react';
import ReactDOM from 'react-dom';
import {Login_page} from './Uipages.stories';

import {render,cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';

afterEach(cleanup)
it('render without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Login_page formdata={Login_page.args}/>,div)
});
/*
it('render login page correcetly',()=>{
    const {getBytestId} =render(<Login_page formdata={Login_page.args}/>);
});
*/
/*
it('matches snapshot',()=>{
    const tree=renderer.create(<Login_page formdata={Login_page.args}/>).toJson();
    expect(tree).toMatchSnapshot();
})*/