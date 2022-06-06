import React from "react";
import { Button as Btn } from "react-bootstrap";

function Button({ textLabel, type, variant }) {
  return (
    <Btn type={type} variant={variant}>
      {textLabel}
    </Btn>
  );
}

export default Button;
