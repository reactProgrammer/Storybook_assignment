import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export default function Button ({ primary, backgroundColor, size, label, ...props }){
  const mode = primary ? 'sb-button--primary' : 'sb-button--secondary';
  return (
    <div className="btn_container">  
      <button
         type="button"
         className={['sb-button', `sb-button--${size}`, mode].join(' ')}
         style={backgroundColor && { backgroundColor }}
         test before it {...props}
     >
        {label} label
     </button>
    </div>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
