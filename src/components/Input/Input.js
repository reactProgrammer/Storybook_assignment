import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

export default function Input({ input:{type,placeholder,name,value}}) {
  return (
       <input
         type={type}
         placeholder={placeholder}
         name={name}
         value={value}
       />
  );
}


Input.propTypes = {
  type:PropTypes.oneOf(['email','password','text']).isRequired, 
  placeholder:PropTypes.string,
  name:PropTypes.string,
  value:PropTypes.string
};

Input.defaultProps = {
    type:'text', 
    placeholder:'',
    name:'',
    Value:''
};
