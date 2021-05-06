import React from 'react';
import Inputgroup from '../Inputgroup/Inputgroup';
import Button from '../Button/Button';
import './Form.css';

export default function  Form({ Inputgroupsdata,button,header}) {
    return (
        <form >
        <div className="Login_Box">
           <h1>{header}</h1>
            {
                Inputgroupsdata.map(data=>(
                    <Inputgroup type={data.type} placeholder={data.placeholder}
                    name={data.name} value={data.value} key={data.id} label={data.label}/>
                ))
            }  
            <Button  
            primary={button.primary} 
            label={button.label} 
            backgroundColor={button.backgroundColor}
            size={button.size}
           />       
        </div>
     </form> 
  
    );
  };




