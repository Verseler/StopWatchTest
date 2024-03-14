import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ControlButtons({
  isActive,
  isPaused,
  pauseStopwatch,
  resetStopwatch,
  resumeStopwatch,
  startStopwatch,
}) {
  const StartButton = (
    <TouchableOpacity onPress={startStopwatch}>
      <View style={[styles.button, { borderColor: "#00ff00" }]}>
        <Text style={[styles.label, { color: "#00ff00" }]}>Start</Text>
      </View>
    </TouchableOpacity>
  );

  const resumePausedButton =
    isActive && isPaused ? (
      <TouchableOpacity onPress={resumeStopwatch}>
        <View style={[styles.button, { borderColor: "orange" }]}>
          <Text style={[styles.label, { color: "orange" }]}>Resume</Text>
        </View>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity onPress={pauseStopwatch}>
        <View style={[styles.button, { borderColor: "orange" }]}>
          <Text style={[styles.label, { color: "orange" }]}>Pause</Text>
        </View>
      </TouchableOpacity>
    );

  const ResetButton = (
    <TouchableOpacity onPress={resetStopwatch}>
      <View style={styles.resetButton}>
        <Text style={{ color: "#fff" }}>Reset</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      {!isActive && StartButton}
      {isActive && resumePausedButton}
      <View style={styles.container}>{isActive && ResetButton}</View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "blue",
  },
  resetButton: {
    position: "absolute",
    end: 50,
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  button: {
    borderWidth: 6,
    borderRadius: 100,
    height: 200,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 24,
    fontWeight: "500",
  },
});
