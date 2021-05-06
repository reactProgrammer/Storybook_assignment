import React from 'react';
import Form from '../Form/Form.js';
import './Uipages.css';

export default function Uipages({formdata}) {
    return (
      <div className="page_section">
           <Form Inputgroupsdata={formdata.Inputgroupsdata} button={formdata.button} header={formdata.header}/>    
      </div>
    );
  };

  




