import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.text}>My First App</Text>
      </View>
      <View style={styles.head}>
        <Text style={styles.text}>My First App Head Section</Text>
      </View>
      <View style={styles.body}>
        <View style={[styles.bodyx, styles.body1]}>
          <Text style={styles.text}>Body 1</Text>
        </View>
        <View style={[styles.bodyx, styles.body2]}>
          <Text style={styles.text}>Body 2</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    flex: 1,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
  },
  head: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "pink",
  },
  bodyx: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  body1: {
    backgroundColor: "yellow",
  },
  body2: {
    backgroundColor: "green",
  },
  headingtext: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
