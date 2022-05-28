import react, { useEffect } from "react";

import { TimeInputProps, StyledTimeInput } from "./styles/TimeInput";
import { Row } from "./Row";
import { Column } from "./Column";
import { useTimer } from "./utils/Timer";
import { time } from "console";
import { Button } from "./Button";
import { useState } from "react";

export function TimeInput(props: TimeInputProps) {
  const [seconds, setSeconds] = useState("00");
  const [minutes, setMinutes] = useState("25");
  const [hasSetTimer, setHasSetTimer] = useState(false);
  const [workTime, setWorkTime] = useState(false);

  const formatTime = (time) => {
    return String(time).padStart(2, "0");
  };

  //let timer = useTimer();

  useEffect(() => {
    if (
      props.timer.seconds === 0 &&
      props.timer.minutes === 0 &&
      hasSetTimer &&
      props.timer.breakTime
    ) {
      setWorkTime(true);
      setHasSetTimer(false);
      setSeconds("00");
      setMinutes("05");
    }
    if (workTime) {
      setWorkTime(false);
      setHasSetTimer(false);
      setSeconds("00");
      setMinutes("25");
    }
  }, [props.timer.seconds, props.timer.breakTime]);

  return (
    <StyledTimeInput {...props}>
      <Column
        height="25vh"
        width="40vh"
        justifyContent="space-evenly"
        alignItems="center"
        backgroundColor="white"
        borderRadius="20px"
      >
        <Row justifyContent="center" width="100%">
          <input
            type={"text"}
            placeholder={"00"}
            value={
              props.timer.isTimerActive() || hasSetTimer
                ? formatTime(props.timer.minutes)
                : minutes
            }
            maxLength={2}
            inputMode={"numeric"}
            max={59}
            style={{
              fontSize: "6vh",
              width: "10vh",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              textAlign: "center",
              fontFamily: "Poppins",
              border: "2px solid black",
              borderRadius: "10px",
            }}
            onClick={(e) => {
              const target = e.target as HTMLInputElement;
              target.select();
            }}
            onChange={(e) => {
              if (e.target.value.match(`[0-5][0-9]*`) != null) {
                setMinutes(e.target.value);
                setHasSetTimer(false);
              }
            }}
          />
          <div style={{ padding: "10px" }}></div>
          <span>:</span>
          <div style={{ padding: "10px" }}></div>
          <input
            type={"text"}
            placeholder={"00"}
            value={
              props.timer.isTimerActive() || hasSetTimer
                ? formatTime(props.timer.seconds)
                : seconds
            }
            maxLength={2}
            style={{
              fontSize: "6vh",
              width: "10vh",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              textAlign: "center",
              fontFamily: "Poppins",
              border: "2px solid black",
              borderRadius: "10px",
            }}
            onClick={(r) => {
              const target = r.target as HTMLInputElement;
              target.select();
            }}
            onChange={(e) => {
              if (e.target.value.match(`[0-5][0-9]*`) != null) {
                setSeconds(e.target.value);
                setHasSetTimer(false);
              }
            }}
          ></input>
        </Row>
        <Row>
          <Button
            border="2px solid black"
            borderRadius="20px"
            padding="10px"
            flexGrow="1"
            justifyContent="center"
            margin="10px"
            width="30vh"
            fontFamily="Poppins"
            backgroundColor={
              props.timer.isTimerActive() ? "#FF2C55" : "#2EFF8F"
            }
            onClick={() => {
              if (!hasSetTimer) {
                props.timer.setTimer(parseInt(minutes), parseInt(seconds));
                setHasSetTimer(true);
              }

              if (props.timer.isTimerActive()) {
                props.timer.stopTimer();
              } else {
                props.timer.startTimer();
              }
            }}
          >
            {props.timer.isTimerActive() ? (
              <span style={{ fontSize: "2vh" }}>Stop</span>
            ) : (
              <span style={{ fontSize: "2vh" }}>Start</span>
            )}
          </Button>
        </Row>
      </Column>
    </StyledTimeInput>
  );
}
