import { Stack } from "expo-router";
import React from "react";
import { LogBox } from "react-native";

// This is only for the not-found website 
LogBox.ignoreAllLogs(true); //this is to prevent any logs from appearing
export default function RootLayout() {
  return (
    <>
    <Stack> 
      <Stack.Screen 
      name ="(tabs)"
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen
      name = "+not-found" 
      options={{}}
      />
    </Stack>
    </>
  );
}

