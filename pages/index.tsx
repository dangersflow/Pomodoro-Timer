import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRef, useState } from "react";
import { useEffect } from "react";

import { Row } from "../components/Row";
import { Column } from "../components/Column";
import { Stack } from "../components/Stack";
import { StackItem } from "../components/StackItem";
import { GiantButton } from "../components/GiantButton";
import { TimeInput } from "../components/TimeInput";
import { useTimer } from "../components/utils/Timer";
import { CircularContainer } from "../components/CircularContainer";
import { useStateStore } from "../components/utils/Timer";
import { GlobalStyle } from "../styles/globalStyle";
import { motion } from "framer-motion";

import One from "../images/1-solid.svg";
import React from "react";

export default function Home(props) {
  const [hoverTimeInput, setHoverTimeInput] = useState(false);
  const [currentDegree, setCurrentDegree] = useState(0);
  const [pastDegree, setPastDegree] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const timer = useTimer(props.state);

  const getRandomTop = () => {
    return Math.floor(Math.random() * 60) + 30;
  };

  const getRandomLeft = () => {
    return Math.floor(Math.random() * 30) + 20;
  };

  useEffect(() => {
    if (timer.isTimerActive()) {
      setPastDegree(currentDegree);
      setCurrentDegree(currentDegree + 6);

      if (currentDegree >= 360) {
        //delay for one second
        setTimeout(() => {}, 200);
        setCurrentDegree(0);
        setPastDegree(0);
      }
    }

    //check if seconds and minutes are equal to zero
    if (timer.seconds === 0 && timer.minutes === 0 && timer.cycleFinished) {
      console.log("timer is done");
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  }, [timer.seconds, timer.minutes, timer.cycleFinished]);

  return (
    <>
      <GlobalStyle isBreakTime={timer.isBreakTime()} />
      <Head>
        <title>Pomodoro</title>
      </Head>
      <Column alignItems="center" justifyContent="space-evenly" height="98vh">
        <h1>Pomodoro Timer</h1>
        <CircularContainer
          backgroundColor="white"
          borderRadius="100%"
          border={"10px solid black"}
          boxShadow="0px 2px 10px black"
          width="90vh"
          height="90vh"
          justifyContent="center"
          alignItems="center"
          pointerEvents={hoverTimeInput ? "none" : "auto"}
        >
          <Column alignContent="center" justifyContent="center">
            <Stack
              alignContent="center"
              justifyContent="center"
              alignItems="center"
            >
              <StackItem>
                <motion.div
                  animate={{
                    rotate: [`${pastDegree}deg`, `${currentDegree}deg`],
                  }}
                  transition={{
                    type: "spring",
                    duration: 0.2,
                  }}
                >
                  <div
                    style={{
                      border: "2px solid black",
                      height: "90vh",
                      zIndex: -1,
                    }}
                  ></div>
                </motion.div>
              </StackItem>
              <StackItem>
                <TimeInput
                  border="2px solid black"
                  borderRadius="20px"
                  fontSize="6vh"
                  fontFamily="Poppins"
                  onMouseEnter={() => setHoverTimeInput(true)}
                  onMouseOut={() => setHoverTimeInput(false)}
                  timer={timer}
                />
              </StackItem>
            </Stack>
            <motion.div
              style={{
                position: "absolute",
                backgroundColor: "transparent",
                width: "90vw",
                height: "90vh",
                top: "-45vh",
                left: "-45vw",
                opacity: 0.5,
                pointerEvents: "none",
                y: 0,
              }}
              animate={{
                translateY: showMessage ? "-100vh" : 0,
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
              }}
            >
              <motion.h1
                layout
                style={{
                  position: "absolute",
                  x: showMessage ? `${getRandomLeft()}vw` : 0,
                  y: showMessage ? `${getRandomTop()}vh` : 0,
                  fontSize: "0rem",
                }}
                animate={{
                  fontSize: showMessage ? "3rem" : "0rem",
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
              >
                {timer.currentMessage}
              </motion.h1>
            </motion.div>
          </Column>
        </CircularContainer>
      </Column>
    </>
  );
}
