import react from "react";
import { StyledRow, RowProps } from "./styles/Row";

export function Row(props: RowProps) {
  return <StyledRow {...props}>{props.children}</StyledRow>;
}
