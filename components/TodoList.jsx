import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import OneTodo from "./OneTodo";
import Form from "./Form";

export default function TodoList() {
  const [items, setItems] = useState([
    { text: "buy milk", key: 1, status: "Doing" },
    { text: "buy bread", key: 2, status: "Doing" },
    { text: "clean the house", key: 3, status: "Doing" },
    { text: "to do for training", key: 4, status: "Doing" },
  ]);

  const [value, setValue] = useState("");
  const addNewTodo = (value) => {
    setItems((list) => {
      return [
        ...list,
        {
          text: value,
          key: Math.random().toString(36).substring(5),
          status: "Doing",
        },
      ];
    });
    setValue("");
  };

  const deleteTodo = (key) => {
    setItems((list) => {
      return list.filter((items) => items.key !== key);
    });
  };

  const changeStatus = (key) => {
    setItems(
      items.map((todo) =>
        todo.key === key ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  return (
    <View style={styles.container}>
      <Form addNewTodo={addNewTodo} value={value} setValue={setValue} />
      {items.length > 0 ? (
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <OneTodo
              el={item}
              deleteTodo={deleteTodo}
              changeStatus={changeStatus}
            />
          )}
        />
      ) : (
        <View style={styles.noTodo}>No Todo</View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noTodo: {
    marginTop: 200,
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
  },
});
