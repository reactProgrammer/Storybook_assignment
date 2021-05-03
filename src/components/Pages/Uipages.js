import React from 'react';
import Form from '../Form/Form.js';
import './Uipages.css';

export default function Uipages({formdata}) {
    console.log('ashwini')
    console.log(formdata)
    return (
      <div className="page_section">
           <Form Inputgroupsdata={formdata.Inputgroupsdata} button={formdata.button}/>    
      </div>
    );
  };




