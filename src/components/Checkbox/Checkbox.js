import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.css';


export const Checkbox = ({ type,checked }) => {
   return(
       <>
         <input
         type={type}
         checked={checked}
         />
       </>
   )
};

Checkbox.propTypes = {
    type:PropTypes.oneOf(['checkbox']).isRequired,
    checked:PropTypes.bool
};

Checkbox.defaultProps = {
    type:'checkbox',
    checked:false,
};
