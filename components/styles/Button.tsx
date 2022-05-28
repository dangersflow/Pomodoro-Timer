import styled from "styled-components";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  display?: string;
  flexDirection?: string;
  flexWrap?: string;
  justifyContent?: string;
  alignItems?: string;
  alignContent?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  minWidth?: string;
  maxHeight?: string;
  minHeight?: string;
  margin?: string;
  padding?: string;
  border?: string;
  borderRadius?: string;
  background?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  textAlign?: string;
  textDecoration?: string;
  backgroundColor?: string;
  boxShadow?: string;
  overflow?: string;
  zIndex?: string;
  position?: string;
  flex?: string;
  order?: string;
  flexGrow?: string;
  flexShrink?: string;
  flexBasis?: string;
  justifySelf?: string;
  alignSelf?: string;
  gridRow?: string;
  gridColumn?: string;
  pointerEvents?: string;
  children?: any;
}

export const StyledButton = styled.button<ButtonProps>`
  display: ${(props) => props.display || "flex"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  align-content: ${(props) => props.alignContent || "flex-start"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  border: ${(props) => props.border || "0"};
  border-radius: ${(props) => props.borderRadius || "0"};
  box-shadow: ${(props) => props.boxShadow || "none"};
  overflow: ${(props) => props.overflow || "visible"};
  position: ${(props) => props.position || "relative"};
  z-index: ${(props) => props.zIndex || "0"};
  flex: ${(props) => props.flex || "0 1 auto"};
  order: ${(props) => props.order || "0"};
  flex-grow: ${(props) => props.flexGrow || "0"};
  flex-shrink: ${(props) => props.flexShrink || "1"};
  flex-basis: ${(props) => props.flexBasis || "auto"};
  align-self: ${(props) => props.alignSelf || "auto"};
  grid-row: ${(props) => props.gridRow || "auto"};
  grid-column: ${(props) => props.gridColumn || "auto"};
  pointer-events: ${(props) => props.pointerEvents || "auto"};

  transition: all 0.1s ease-in-out;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 3px 6px black;
    pointer-events: ${(props) => props.pointerEvents || "auto"};
  }
  &:active {
    cursor: pointer;
    box-shadow: 0px 0px 0px black;
    pointer-events: ${(props) => props.pointerEvents || "auto"};
  }
`;
