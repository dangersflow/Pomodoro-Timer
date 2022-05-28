import { createGlobalStyle, ThemeProvider } from "styled-components";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "../styles/fonts.css";
import One from "../images/1-solid.svg";
import { useTimer } from "../components/utils/Timer";
import { GlobalStyle, theme } from "../styles/globalStyle";
import { view, store } from "@risingstack/react-easy-state";
import { useStateStore } from "../components/utils/Timer";
import { StateType } from "../components/utils/Timer";
import React from "react";

const particlesInit = async (main) => {
  console.log(main);

  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  // starting from v2 you can add only the features you need reducing the bundle size
  await loadFull(main);
};

const particlesLoaded = (container) => {
  console.log(container);
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fullScreen: true,
              fpsLimit: 60,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "repulse",
                  },
                  onHover: {
                    enable: false,
                    mode: "bubble",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  bubble: {
                    size: 10,
                    distance: 500,
                  },
                  repulse: {
                    distance: 100,
                    duration: 1,
                    parallax: {
                      enable: false,
                      force: 60,
                      smooth: 10,
                    },
                  },
                },
              },
              particles: {
                color: {
                  value: "#000000",
                },
                links: {
                  color: "#ffffff",
                  distance: 175,
                  enable: false,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                rotate: {
                  value: 0,
                  random: true,
                  direction: "clockwise",
                  animation: {
                    enable: true,
                    speed: 5,
                    sync: false,
                  },
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 0.3,
                  straight: false,
                },
                number: {
                  density: {
                    enable: false,
                    area: 800,
                  },
                  value: 50,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  character: [
                    {
                      fill: true,
                      font: "Poppins",
                      style: "",
                      value: "1",
                      weight: "400",
                    },
                    {
                      fill: true,
                      font: "Poppins",
                      style: "",
                      value: "2",
                      weight: "400",
                    },
                    {
                      fill: true,
                      font: "Poppins",
                      style: "",
                      value: "3",
                      weight: "400",
                    },
                    {
                      fill: true,
                      font: "Poppins",
                      style: "",
                      value: "4",
                      weight: "400",
                    },
                    {
                      fill: true,
                      font: "Poppins",
                      style: "",
                      value: "5",
                      weight: "400",
                    },
                    {
                      fill: true,
                      font: "Poppins",
                      style: "",
                      value: "6",
                      weight: "400",
                    },
                    {
                      fill: true,
                      font: "Poppins",
                      style: "",
                      value: "7",
                      weight: "400",
                    },
                    {
                      fill: true,
                      font: "Poppins",
                      style: "",
                      value: "8",
                      weight: "400",
                    },
                    {
                      fill: true,
                      font: "Poppins",
                      style: "",
                      value: "9",
                      weight: "400",
                    },
                  ],
                  polygon: {
                    nb_sides: 5,
                  },
                  stroke: {
                    color: "#000000",
                    width: 0,
                  },
                  type: "char",
                },
                size: {
                  value: { min: 20, max: 50 },
                },
              },
              detectRetina: true,
            }}
          />
        </React.Fragment>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default view(MyApp);
