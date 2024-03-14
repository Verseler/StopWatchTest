import { useEffect, useRef, useState } from "react";
import { StyleSheet, SafeAreaView, StatusBar, View } from "react-native";

import ControlButtons from "./components/ControlButtons";
import Timer from "./components/Timer";

export default function App() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);

  // Function to start the stopwatch
  const startStopwatch = () => {
    startTimeRef.current = Date.now() - time * 1000;
    intervalRef.current = setInterval(() => {
      setTime(Math.floor((Date.now() - startTimeRef.current) / 1000));
    }, 1000);
    setIsActive(true);
    setIsPaused(false);
  };
  // Function to pause the stopwatch
  const pauseStopwatch = () => {
    clearInterval(intervalRef.current);
    setIsPaused(true);
  };
  // Function to reset the stopwatch
  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsActive(false);
  };
  // Function to resume the stopwatch
  const resumeStopwatch = () => {
    startTimeRef.current = Date.now() - time * 1000;

    intervalRef.current = setInterval(() => {
      setTime(Math.floor((Date.now() - startTimeRef.current) / 1000));
    }, 1000);

    setIsActive(true);
    setIsPaused(false);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Timer time={time} />
        <ControlButtons
          isActive={isActive}
          isPaused={isPaused}
          pauseStopwatch={pauseStopwatch}
          resetStopwatch={resetStopwatch}
          resumeStopwatch={resumeStopwatch}
          startStopwatch={startStopwatch}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
});
