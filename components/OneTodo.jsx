import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function OneTodo({ el, deleteTodo, changeStatus }) {
  return (
    <View style={{ margin: 10 }}>
      <View style={styles.container}>
        <Text style={styles.text}>{el.text}</Text>
        <TouchableOpacity
          style={el.status ? styles.butStatus : styles.butStatusDone}
          onPress={() => changeStatus(el.key)}
        >
          <Text>{el.status ? "💼 Doing" : "✔ Done"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.butDelete}
          onPress={() => deleteTodo(el.key)}
        >
          <Text>🗑</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
  },
  text: {
    flex: 1,
    padding: 5,
    textAlign: "flex-start",
    fontSize: 15,
    fontWeight: "bold",
    width: "30%",
  },
  butStatus: {
    padding: 5,
    textAlign: "center",
    backgroundColor: "#00fa9a",
    borderWidth: 1,
    width: "25%",
    borderRadius: 5,
    marginRight: 20,
    maxHeight: 30,
  },
  butStatusDone: {
    padding: 5,
    textAlign: "center",
    backgroundColor: "#4cbb17",
    borderWidth: 1,
    width: "25%",
    borderRadius: 5,
    marginRight: 20,
    maxHeight: 30,
  },
  butDelete: {
    padding: 5,
    textAlign: "center",
    backgroundColor: "red",
    borderWidth: 1,
    width: "10%",
    borderRadius: 5,
    maxHeight: 30,
  },
});
