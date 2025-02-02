import React, { useEffect }  from 'react'
import {Text, Pressable, StyleSheet, View} from "react-native"
import QRCode from "react-native-qrcode-svg";
import { useLocalSearchParams,  useRouter} from "expo-router"
import Button from '@/components/buttons'
import uuid from "react-native-uuid"
import { update, set, ref, push} from 'firebase/database';
import {database} from '@/firebaseConfig';

export default function qrCode() {

    const { id } = useLocalSearchParams();
    const router = useRouter(); 

    const orderId = uuid.v4(); 
    const orderTime = new Date().toISOString(); // Current timestamp

  // Create JSON data for the QR code
    const orderData = {
    order_id: orderId,
    drink_id: id,
    order_time: orderTime,
    }

  // Async function for storing order data in Firebase
  const storeOrder = async () => {
    console.log("storeOrder function called with data:", orderData);
    try {
      // Store the order in Firebase
      const newOrderRef = push(ref(database, "orders/"), orderData);
      console.log("Order Confirmed! Firebase key:", newOrderRef.key);
    } catch (error) {
      console.log("Error: Could not send order details:", error);
    }
  };
      // UseEffect to call storeOrder after component mounts
  useEffect(() => {
    storeOrder();
  }, []); // Empty dependency array means it runs only once after the initial render
    return (
            <View style={{ alignItems: "center", justifyContent: "center", margin: 20 }}>
              <QRCode value={JSON.stringify(orderData)} size={200} />
            </View>
    )

} 

const Styles = StyleSheet.create({

})