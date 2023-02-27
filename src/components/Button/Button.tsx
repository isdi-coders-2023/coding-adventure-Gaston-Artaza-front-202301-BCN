import React from "react";
import ButtonStyled from "./ButtonStyled";
interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return <ButtonStyled>{text}</ButtonStyled>;
};

export default Button;
