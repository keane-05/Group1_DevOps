import React from 'react'
import {Text, Pressable, StyleSheet, View} from "react-native"
import QRCode from "react-native-qrcode-svg";
import { useLocalSearchParams,  useRouter} from "expo-router"
import { drinks } from './(tabs)/card'
import Button from '@/components/buttons'
import uuid from "react-native-uuid"

export default function qrCode() {

    const { id } = useLocalSearchParams();
    const router = useRouter(); 

    const orderId = uuid.v4(); 
    const orderTime = new Date().toISOString(); // Current timestamp

  // Create JSON data for the QR code
    const qrData = JSON.stringify({
    order_id: orderId,
    drink_id: id,
    order_time: orderTime,
  });



    return (
            <View style={{ alignItems: "center", justifyContent: "center", margin: 20 }}>
              <QRCode value={qrData} size={200} />
            </View>
    )

} 

const Styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },

    text: {
        fontSize: 20, 
        color: "#ababab"
    }
})