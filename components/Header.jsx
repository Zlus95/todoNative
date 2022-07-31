import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Main() {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>TodoList</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 60,
    backgroundColor: "#edff21",
  },
  text: {
    textAlign: "center",
    paddingTop: 15,
    fontSize: 20,
    color: "#00fa9a",
  },
});
