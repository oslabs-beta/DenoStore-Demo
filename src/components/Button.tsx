import * as React from 'react';

type nameProp = {
  name: string;
  className: string;
};

// const Button: React.FC<nameProp> = ({ name: nameProp }) => {
const Button: React.FC<nameProp> = ({ name, className }) => {
  return (
    <div>
      <button className={className}>{name}</button>
    </div>
  );
};

export default Button;
