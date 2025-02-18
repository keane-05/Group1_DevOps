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
        gestureEnabled: false,  // Disables swipe back gestures
      }}
      
      />
      <Stack.Screen
      name = "index" 
      options={{        
        headerTitle: "", 
        headerStyle: {
          backgroundColor: "#25292e",
        }, 
        headerTintColor: "#fff",}}
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
        headerLeft: () => null, // Removes the back button
        gestureEnabled: false,  // Disables swipe back gestures
        headerBackVisible: false
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

