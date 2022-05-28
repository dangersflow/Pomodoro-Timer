import { store } from "@risingstack/react-easy-state";
import { useState, useEffect, useRef } from "react";
import { theme } from "../../styles/globalStyle";

interface StateProps {
  isBreak: boolean;
  exampleMessage: string;
}

export function useInterval(callback, delay) {
  const savedCallback = useRef(null);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback !== undefined) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export function useStateStore() {
  const appState = store({
    isBreak: false,
    exampleMessage: "hello",
  });

  const [state, setState] = useState(appState);

  const setIsBreak = (isBreak: boolean) => {
    setState({
      ...state,
      isBreak: isBreak,
    });
  };

  useEffect(() => {
    console.log("isBreak is " + state.isBreak);
  }, [state]);

  // const currentState: StateType = {
  //   isBreak: false,
  // };

  // useEffect(() => {
  //   console.log("isBreak is " + appState.isBreak);
  // }, [appState.isBreak]);

  return { state, setIsBreak };
}

export function useTimer(state) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [breakTime, setBreakTime] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [cycleFinished, setCycleFinished] = useState(false);

  const getMessage = (isBreak?: Boolean) => {
    const breakMessages = [
      "Break time!",
      "Keep it up!",
      "You're doing great!",
      "You're amazing!",
      "Time for a rest :3",
      "Get some rest!",
    ];
    const workMessages = [
      "Time to work!",
      "Keep going!",
      "Work time :)",
      "Time for another burst!",
      "Rest is for the weak!",
      "Time to get some work done!",
    ];

    return isBreak
      ? breakMessages[Math.floor(Math.random() * breakMessages.length)]
      : workMessages[Math.floor(Math.random() * workMessages.length)];
  };

  const isBreakTime = () => {
    return breakTime;
  };

  const isTimerActive = () => {
    return isActive;
  };

  const setTimer = (minutes?: number, seconds?: number) => {
    setMinutes(minutes!);
    setSeconds(seconds!);
    setCycleFinished(false);
  };

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  useInterval(
    () => {
      setSeconds((seconds) => seconds - 1);
    },
    isActive ? 1000 : null
  );

  useEffect(() => {
    if (seconds <= 0 && minutes <= 0 && isActive) {
      stopTimer();
      setCycleFinished(true);
      if (breakTime) {
        setCurrentMessage(getMessage(false));
        setBreakTime(false);
      } else {
        setCurrentMessage(getMessage(true));
        setBreakTime(true);
      }
    } else if (seconds <= 0 && minutes > 0) {
      setMinutes((minutes) => minutes - 1);
      setSeconds((seconds) => 59);
    }
  }, [seconds, minutes, isActive, breakTime]);

  return {
    minutes,
    seconds,
    currentMessage,
    cycleFinished,
    breakTime,
    startTimer,
    stopTimer,
    setTimer,
    isTimerActive,
    isBreakTime,
  };
}
