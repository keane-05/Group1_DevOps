import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View, ScrollView,  } from "react-native";
import { Link, useRouter } from "expo-router";
import { update, get, ref, push, query, orderByChild, equalTo, onValue} from 'firebase/database';
import {database} from '@/firebaseConfig';
import Card from "../../components/card"; // Import the reusable component
import { drinks } from "./card";

interface Drink {
  id: number;
  name: string;
  description: string;
  price: string;
  image: any; // You can specify the image type based on how you're importing it (e.g., string for URL or require)
  stock: number;
}

// Main EcommerceApp Component
export default function unusedOrders() {
    const router = useRouter(); // Use expo-router's navigation functions
    const ordersRef = ref(database, 'orders');  
    const [unredeemedOrders, setUnredeemedOrders] = useState<any[]>([]);

    useEffect(() => {
      // Initialize Firebase Realtime Databas
  
      // Query to fetch unredeemed orders
      const ordersQuery = query(ordersRef, orderByChild('redeem_status'), equalTo("false"));
  
      // Fetch the data
      const unsubscribe = onValue(ordersQuery, (snapshot) => {
          if (snapshot.exists()) {
            const orders = snapshot.val();

            const drinkMap = drinks.reduce((map, drink) => {
              map[drink.id] = drink;
              return map;
            }, {} as { [key: number]: Drink }); 



            const unredeemed = Object.keys(orders).map((key) => ({
              order_id: key,
              drink_id: orders[key].drink_id,
            }));

            const unredeemedDrinks = unredeemed.map((order) => {
              // Find the drink matching the drink_id from the order
              const drink = drinks.find((drink) => drink.id === parseInt(order.drink_id));
            
              // Return an object containing order details and corresponding drink details
              return {
                order_id: order.order_id, 
                drink_id: order.drink_id, 
                name: drink ? drink.name : "Unknown",  // Drink name, default to "Unknown" if not found
                price: drink ? drink.price : "$0.00",  // Drink price, default to "$0.00" if not found
                image: drink ? drink.image : "",  // Drink image, default to empty string if not found
                stock: drink ? drink.stock : 0,  // Drink stock, default to 0 if not found
              };
            });
            setUnredeemedOrders(unredeemedDrinks); // Set state with unredeemed orders
          } else {
            console.log('No unused orders found.');
          }
        })
        return () => unsubscribe();
    }, []);
    return (
        <ScrollView>
        <View>
        {unredeemedOrders.map((order) => ( 
            <Card
              title={order.name}  // Dynamic title from the drink object
              image={order.image}  // Dynamic image from the drink object
              stock={""}  // Convert stock to string if needed
              info="Click Me To Regenerate QR Code!"  // Static or dynamic information
              onPress={() => router.push({pathname:'../unusedQrPage', params: {id: order.order_id} })} // Dynamically navigate based on drink id
            />
        ))}
        </View>
        </ScrollView>
  );
}