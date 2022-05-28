import react, { ButtonHTMLAttributes } from "react";

import { ButtonProps, StyledButton } from "./styles/Button";

export function Button(props: ButtonProps) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}
