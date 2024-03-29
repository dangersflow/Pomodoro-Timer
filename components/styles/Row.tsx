import styled from "styled-components";

export interface RowProps {
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
  children?: any;
}

export const StyledRow = styled("div")<RowProps>`
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  flex-wrap: ${(props) => props.flexWrap || "nowrap"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "stretch"};
  align-content: ${(props) => props.alignContent || "stretch"};
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
`;
