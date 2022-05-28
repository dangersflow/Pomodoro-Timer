import {
  CircularContainerProps,
  StyledCircularContainer,
} from "./styles/CircularContainer";

export function CircularContainer(props: CircularContainerProps) {
  return (
    <StyledCircularContainer {...props}>
      {props.children}
    </StyledCircularContainer>
  );
}
