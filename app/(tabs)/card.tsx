import React from "react";
import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import { Link, useRouter } from "expo-router";
import Button from "@/components/buttons";
import IconButton from "@/components/IconButton";
import { MaterialIcons } from "@expo/vector-icons";
import Card from "../../components/card"; // Import the reusable component
const PlaceHolderImage = require("../../assets/images/reptile.jpg");

// Main EcommerceApp Component
export default function EcommerceApp() {
  const router = useRouter(); // Use expo-router's navigation functions

  const changeTab = () => {
    router.push("/information"); // Navigate to the "/about" route
  };

  return (
    <ScrollView>
      {/* Example of an IconButton */}

      <View>
        {/* Card Component with a MaterialIcon */}
        <Card
          title="Ice Cream"
          image={PlaceHolderImage}
          onPress={changeTab}
          stock="10" 
          info="Click Me To Know More! "

        />
      {/* <IconButton icon="add" label="Add" onPress={changeTab} /> */}

        <Card
          title="Hello"
          image={PlaceHolderImage}
          info="Website"
          stock = "10"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  icon: {
    color: "black",
  },
});
