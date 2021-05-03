import React from 'react';
import Inputgroup from '../Inputgroup/Inputgroup';
import Button from '../Button/Button';
import './Form.css';

export default function  Form({ Inputgroupsdata,button}) {
    
    return (
        <form >
        <div className="Login_Box">
           <h1>ACCOUNT LOGIN</h1>
            {
                Inputgroupsdata.map(data=>(
                    <Inputgroup inputdata={data} key={data.id}/>
                ))
            }  
            <Button  primary={button.primary} label={button.label} backgroundColor={button.backgroundColor}
            size={button.size}/>       
        </div>
     </form> 
  
    );
  };




