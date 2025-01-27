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
      name = "information"
      options={{
        headerTitle: "Information", 
        tabBarIcon: ({focused, color}) =>
           <Ionicons 
              name = {focused ? "home-sharp":"home-outline"}
              color = {color}
              size = {20}/>,
      }}
      />
  
    </Tabs>
  );
}

