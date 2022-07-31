import React from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

export default function Form({ addNewTodo, value, setValue }) {
  return (
    <View>
      <TextInput
        style={styles.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="New todo"
      />
      <Button
        title="Add Todo"
        onPress={() => addNewTodo(value)}
        disabled={value.length === 0}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    padding: 10,
    marginVertical: 30,
    marginHorizontal: "20%",
    width: "60%",
  },
});
