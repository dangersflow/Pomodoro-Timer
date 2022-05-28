import react from "react";

import { StackProps, StyledStack } from "./styles/Stack";

export function Stack(props: StackProps) {
  return <StyledStack {...props}>{props.children}</StyledStack>;
}
