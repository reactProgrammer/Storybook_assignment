import React from 'react';
import Form from '../Form/Form';
import './Uipages.css';

export default function Uipages({formdata}) {
  debugger;
    console.log('ashwini')
    console.log(Form)
    return (
      <div className="page_section">
           <Form Inputgroupsdata={formdata.Inputgroupsdata.input} button={formdata.button}/>    
      </div>
  
    );
  };




