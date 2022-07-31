import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import Header from "./Header";
import img from "../img/blank-post-it-note-1.png";
import TodoList from "./TodoList";

export default function Main() {
  return (
    <View style={styles.container}>
      <Header />
      <ImageBackground source={img} resizeMode="center" style={styles.image}>
        <TodoList />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: "100vh",
  },
});
