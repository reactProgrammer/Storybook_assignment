import React from 'react';
import Input from '../Input/Input';

export default function  Inputgroup({ type,placeholder,name,value,label,id}) {
    
    return (
        <div className="form_input">
           <label>{label}</label>  
           <Input type={type} placeholder={placeholder}
                  name={name} value={value}/>
        </div>
    );
  };


  
 


