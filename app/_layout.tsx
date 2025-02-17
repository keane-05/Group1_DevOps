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

      <Stack.Screen
      name = "information"
      options={{
        headerTitle: "Information", 
        headerStyle: {
          backgroundColor: "#25292e",
        }, 
        headerTintColor: "#fff",
      }}
      />

      <Stack.Screen
      name = "payment"
      options={{
        headerTitle: "Payment", 
        headerStyle: {
          backgroundColor: "#25292e",
        }, 
        headerTintColor: "#fff",
      }}
      />

      <Stack.Screen
      name = "qrcode"
      options={{
        headerTitle: "QR Code", 
        headerStyle: {
          backgroundColor: "#25292e",
        }, 
        headerTintColor: "#fff",
        gestureEnabled: false,
        headerBackVisible: false, // Hides the back button
        headerLeft: () => null, // Ensures there's no left-side button
      }}
      />
    
    <Stack.Screen
      name = "unusedQrPage"
      options={{
        headerTitle: "QR Code", 
        headerStyle: {
          backgroundColor: "#25292e",
        }, 
        headerTintColor: "#fff",
      }}
      />
    </Stack>
    </>
  );
}

