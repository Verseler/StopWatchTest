import { StyleSheet, Text, View } from "react-native";

export default function Timer({ time }) {
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.digits}>{minutes}:</Text>
      </View>

      <View>
        <Text style={styles.digits}>{seconds}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  digits: {
    fontSize: 70,
    marginBottom: 30,
    color: "#fff",
  },
});
