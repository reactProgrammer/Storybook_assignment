import React from 'react';
import Input from '../Input/Input';

export default function  Inputgroup({ inputdata}) {
    console.log(inputdata);
    if (inputdata.length === 0) {
        return <div className="form_input">empty</div>;
    }
    
    return (
        <div className="form_input">
           <label>{inputdata.input.label}</label>  
           <Input input={inputdata.input}/>
        </div>
    );
  };




