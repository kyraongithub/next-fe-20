import React from 'react';
import { ButtonProps } from './button.interface';

const Button = (props: ButtonProps) => {
  const { onclick, children } = props;

  const handleClick = () => {
    onclick();
  };

  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
