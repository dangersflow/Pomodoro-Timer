import { createGlobalStyle } from "styled-components";
import { useState } from "react";

export const theme = {
  colors: {
    primary: "#FF2C55",
    secondary: "#2EFF8F",
    tertiary: "#2f98da",
    quaternary: "#1d75b6",
  },
};

export const GlobalStyle = createGlobalStyle<{ isBreakTime: boolean }>`

body{
  background-color:${(props) =>
    props.isBreakTime ? theme.colors.secondary : theme.colors.primary};
  padding: 1rem;
  margin-left:10%;
  margin-right:10%;
  font-family: 'Poppins', cursive;
  justify-content:center;
  display:flex;
  flex: 0 1 auto;
  flex-direction:column;

  transition: all 0.3s ease-in-out;

  @media (min-width: 0px) {
    padding: 0;
    margin-left:0;
    margin-right:0;
  }
  
  @media (min-width: 1920px) {
    margin-left:5%;
    margin-right:5%;
  }

  @media (min-width: 2570px) {
    margin-left:20%;
    margin-right:20%;
  }

  @media (min-width: 3450px) {
    margin-left:30%;
    margin-right:30%;
  }
  
}
#tsparticles{
  position: absolute;
  z-index: -1;
}
#tsparticles-message{
  position: absolute;
  z-index: 1;
}
`;
