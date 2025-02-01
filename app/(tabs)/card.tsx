import React from "react";
import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import { Link, useRouter } from "expo-router";
import Button from "@/components/buttons";
import IconButton from "@/components/IconButton";
import { MaterialIcons } from "@expo/vector-icons";
import Card from "../../components/card"; // Import the reusable component

export const drinks = [
  {
    id: 1,
    name: "Coke",
    descripion: "insert description",
    price: "$1.20",
    image: require("../../assets/images/coke.png"),
    stock: 10,
  },
  {
    id: 2,
    name: "Sprite",
    descripion: "insert description",
    price: "$1.20",
    image: require("../../assets/images/sprite.png"),
    stock: 10,
  },
  {
    id: 3,
    name: "Pepsi",
    descripion: "insert description",
    price: "$1.20",
    image: require("../../assets/images/pepsi.png"),
    stock: 10,
  },
  {
    id: 4,
    name: "7up",
    descripion: "insert description",
    price: "$1.20",
    image: require("../../assets/images/7up.png"),
    stock: 10,
  },
  {
    id: 5,
    name: "Fanta",
    descripion: "insert description",
    price: "$1.20",
    image: require("../../assets/images/fanta.png"),
    stock: 10,
  },
  {
    id: 6,
    name: "Water",
    descripion: "insert description",
    price: "$1.20",
    image: require("../../assets/images/dasani-water.png"),
    stock: 10,
  }
]
// Main EcommerceApp Component
export default function EcommerceApp() {
  const router = useRouter(); // Use expo-router's navigation functions

  return (
    <ScrollView>
      <View>
          {drinks.map((drink) => (
          <Card
            key={drink.id}
            title={drink.name}  // Dynamic title from the drink object
            image={drink.image}  // Dynamic image from the drink object
            stock={drink.stock.toString()}  // Convert stock to string if needed
            info="Click Me To Know More!"  // Static or dynamic information
            onPress={() => router.push({pathname:'../information', params: {id: drink.id} })} // Dynamically navigate based on drink id
          />
          ))}
      </View>
    </ScrollView>
  );
}


