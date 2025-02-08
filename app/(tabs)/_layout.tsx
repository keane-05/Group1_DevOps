import { Tabs } from "expo-router";
import React from "react";
import {Ionicons} from "@expo/vector-icons";
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={
        {
          
          tabBarActiveTintColor:"#ffd33d",
          headerStyle: {
            backgroundColor: "#25292e",
          }, 
          headerShadowVisible: false, 
          headerTintColor: "#fff",
          tabBarStyle: { 
            backgroundColor: "#25292e",
          }
        }
      }
    > 
  
    <Tabs.Screen 
      name = "card"
      options={{
        headerTitle: "Card", 
        tabBarIcon: ({focused, color}) =>
           <Ionicons 
              name = {focused ? "card":"card-outline"}
              color = {color}
              size = {20}/>,
      }}
      />

    <Tabs.Screen 
      name = "about"
      options={{
        headerTitle: "About", 
        tabBarIcon: ({focused, color}) =>
           <Ionicons 
              name = {focused ? "information-circle":"information-circle-outline"}
              color = {color}
              size = {20}/>,
      }}
      />

    <Tabs.Screen 
      name = "Unused"
      options={{
        headerTitle: "My Unused Orders", 
        tabBarIcon: ({focused, color}) =>
           <Ionicons 
              name = {focused ? "archive":"archive-outline"}
              color = {color}
              size = {20}/>,
      }}
      />

    </Tabs>
  );
}

