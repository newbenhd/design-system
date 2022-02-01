import React from "react";
import { Styled, SecondaryStyled } from "./Button.css";

interface IProps {
  label: string;
  size?: "small" | "medium" | "large";
  type?: "primary" | "secondary" | "error";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
const Button: React.FC<IProps> = ({
  label,
  size = "medium",
  type = "primary",
  onClick = () => {},
}) => {
  if (type === "secondary")
    return (
      <SecondaryStyled>
        <button onClick={onClick}>{label}</button>
      </SecondaryStyled>
    );
  return (
    <Styled>
      <button onClick={onClick}>{label}</button>
    </Styled>
  );
};

export default Button;
