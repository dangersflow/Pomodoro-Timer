import react, { ButtonHTMLAttributes } from "react";

import { GiantButtonProps, StyledGiantButton } from "./styles/GiantButton";

export function GiantButton(
  props: ButtonHTMLAttributes<HTMLButtonElement> & GiantButtonProps
) {
  return <StyledGiantButton {...props}>{props.children}</StyledGiantButton>;
}
