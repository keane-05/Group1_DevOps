import React from 'react'
import {Text, Pressable, StyleSheet, View} from "react-native"
import { Image } from 'expo-image'
import { Redirect, useLocalSearchParams,  useRouter} from "expo-router"
import { drinks } from './(tabs)/card'
import Button from '@/components/buttons'
import Card from '@/components/card'

export default function Info() { 


  const router = useRouter(); // Use expo-router's navigation functions

  const changePage = () => {
    router.push("/payment"); // Navigate to the "/about" route
  };


    const { id } = useLocalSearchParams();
    const drink = drinks.find(d => d.id === Number(id));  // Find the matching drink

  if (!drink) {
    return <Text style={styles.error}>Drink not found!</Text>;
  }
    return (
        <>
            <View style={styles.container}>
      {/* Top Image Section */}
      <Image source={drink.image} style={styles.image} />

      {/* Drink Info Section */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{drink.name}</Text>
        <Text style={styles.description}>{drink.descripion}</Text>
        <Text style={styles.price}>{drink.price}</Text>
        <Text style={styles.stock}>Stock: {drink.stock}</Text>
      </View>

      {/* Button Fixed at Bottom */}
      <View style={styles.buttonContainer}>
        <Button label="Order Now" theme="primary" onPress={changePage} />
      </View>
    </View>
        </>
    )
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    image: {
      width: "100%",
      height: "50%", // 40% of screen height
      resizeMode: "cover",
    },
    infoContainer: {
      flex: 1, // Take remaining space
      padding: 20,
    },
    name: {
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 10,
    },
    description: {
      fontSize: 16,
      color: "#666",
      marginBottom: 10,
    },
    price: {
      fontSize: 22,
      fontWeight: "bold",
      color: "#ff4500",
    },
    stock: {
      fontSize: 16,
      color: "green",
      marginTop: 5,
    },
    buttonContainer: {
      position: "absolute",
      bottom: 40,
      left: 20,
      right: 20,
    },
    error: {
      fontSize: 18,
      color: "red",
      textAlign: "center",
      marginTop: 20,
    },
  });
  
  