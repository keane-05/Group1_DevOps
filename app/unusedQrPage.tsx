import React, { useState }  from 'react'
import {Text, Pressable, StyleSheet, View} from "react-native"
import QRCode from "react-native-qrcode-svg";
import { useLocalSearchParams,  useRouter} from "expo-router"
import Button from '@/components/buttons'
import uuid from "react-native-uuid"
import { update, get, ref, push, query, orderByChild, equalTo, onValue} from 'firebase/database';
import {database} from '@/firebaseConfig';

export default function unusedQrCode() {
    
    const { id } = useLocalSearchParams();
    const router = useRouter(); 
    const [orderData, setOrderData] = useState(null); // State to hold order data

    if (id) {
        const orderRef = ref(database, `orders/${id}`);

        get(orderRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            setOrderData(data)
          } else {
            console.log("Order not found");
          }
        })
        .catch((error) => {
          console.error("Error fetching order:", error);
        });
    }

    return (
        <View style={{ alignItems: "center", justifyContent: "center", margin: 20 }}>
            <QRCode value={JSON.stringify(orderData)} size={300} />
        </View>
    )

} 

const Styles = StyleSheet.create({

})