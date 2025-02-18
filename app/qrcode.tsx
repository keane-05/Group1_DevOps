import React, { useEffect }  from 'react'
import {Text, Pressable, StyleSheet, View} from "react-native"
import QRCode from "react-native-qrcode-svg";
import { useLocalSearchParams,  useRouter} from "expo-router"
import Button from '@/components/buttons'
import uuid from "react-native-uuid"
import { update, set, ref, push} from 'firebase/database';
import {database} from '@/firebaseConfig';

export default function qrCode() {

    const changePage = () => {
      router.push({
        pathname: "/card",
        params: {id: id}
      }); 
    };

    const { id } = useLocalSearchParams();
    const router = useRouter(); 

    const orderId = uuid.v4(); 
    const orderTime = new Date().toISOString(); // Current timestamp

  // Create JSON data for the QR code
    const orderData = {
    order_id: orderId,
    drink_id: id,
    order_time: orderTime,
    redeem_status: "false"
    }

  // Async function for storing order data in Firebase
  const storeOrder = async () => {
    console.log("storeOrder function called with data:", orderData);
    try {
      // Store the order in Firebase
      await set(ref(database, `orders/${orderId}`), orderData);
      console.log("Order Confirmed! Firebase key:", orderId);
    } catch (error) {
      console.log("Error: Could not send order details:", error);
    }
  };
      // UseEffect to call storeOrder after component mounts
  useEffect(() => {
    storeOrder();
  }, []); // Empty dependency array means it runs only once after the initial render
    return <>(
            <View style={{ alignItems: "center", justifyContent: "center", margin: 20 }}>
              <QRCode value={JSON.stringify(orderData)} size={300} />
            </View>

                    
            <View style={styles.buttonContainer}>
              <Button label="Back To Home" theme="primary" onPress={changePage} />
            </View>
                    
    )</>

} 

const styles = StyleSheet.create({
  buttonContainer: {
          position: "absolute",
          bottom: 40,
          left: 20,
          right: 20,
  }
})