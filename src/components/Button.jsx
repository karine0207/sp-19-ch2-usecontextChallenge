import React from 'react';


const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default Button;
