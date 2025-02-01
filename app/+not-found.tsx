import {Link, Stack} from "expo-router";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

//typescript for the not-found webpage
export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options={{ title: "Oops! Not Found "}}/>
    <View style={Styles.container}>
      <Link href = "/(tabs)/card" style = {Styles.button}>
      Go back to home screen
      </Link>
    </View>
    </>
  );
}

const Styles = StyleSheet.create({ //this is how we created stylesheets within the tsx file
  container: {
    backgroundColor: "#25292e",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: { 
    fontSize: 20, 
    textDecorationLine: "underline",
    color: "#fff"
  },
})

