import react from "react";
import { StyledColumn, ColumnProps } from "./styles/Column";

export function Column(props: ColumnProps) {
  return <StyledColumn {...props}>{props.children}</StyledColumn>;
}
