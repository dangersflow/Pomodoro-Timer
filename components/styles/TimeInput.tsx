import styled from "styled-components";
import { useTimer } from "../utils/Timer";

export interface TimeInputProps extends React.HTMLAttributes<HTMLDivElement> {
  border?: string;
  borderRadius?: string;
  background?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  textAlign?: string;
  transition?: string;
  height?: string;
  width?: string;
  backgroundColor?: string;
  boxShadow?: string;
  overflow?: string;
  position?: string;
  outline?: string;
  textTransform?: string;
  cursor?: string;
  textDecoration?: string;
  padding?: string;
  pointerEvents?: string;
  onMouseEnter?: any;
  onMouseLeave?: any;
  onMouseOver?: any;
  onMouseOut?: any;
  justifyContent?: string;
  alignItems?: string;
  alignContent?: string;
  flexDirection?: string;
  flexWrap?: string;
  justifySelf?: string;
  alignSelf?: string;
  display?: string;
  timer?: any;
}

export const StyledTimeInput = styled.div<TimeInputProps>`
  border: ${(props) => props.border || "0"};
  border-radius: ${(props) => props.borderRadius || "0"};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  box-shadow: ${(props) => props.boxShadow || "none"};
  overflow: ${(props) => props.overflow || "visible"};
  position: ${(props) => props.position || "relative"};
  outline: ${(props) => props.outline || "none"};
  text-transform: ${(props) => props.textTransform || "none"};
  cursor: ${(props) => props.cursor || "default"};
  background: ${(props) => props.background || "transparent"};
  color: ${(props) => props.color || "inherit"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  transition: ${(props) => props.transition || "all 0.3s ease-in-out"};
  font-size: ${(props) => props.fontSize || "inherit"};
  font-weight: ${(props) => props.fontWeight || "inherit"};
  font-family: ${(props) => props.fontFamily || "inherit"};
  text-align: ${(props) => props.textAlign || "inherit"};
  text-decoration: ${(props) => props.textDecoration || "inherit"};
  padding: ${(props) => props.padding || "0"};
  pointer-events: ${(props) => props.pointerEvents || "auto"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-content: ${(props) => props.alignContent || "flex-start"};
  justify-self: ${(props) => props.justifySelf || "flex-start"};
  align-self: ${(props) => props.alignSelf || "flex-start"};
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.flexDirection || "column"};
  flex-wrap: ${(props) => props.flexWrap || "nowrap"};
`;