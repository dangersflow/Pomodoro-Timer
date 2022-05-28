import react from "react";
import { StackItemProps, StyledStackItem } from "./styles/StackItem";

export function StackItem(props: StackItemProps) {
  return <StyledStackItem {...props}>{props.children}</StyledStackItem>;
}
