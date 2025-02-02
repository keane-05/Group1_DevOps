import React from 'react'
import {Text, Pressable, StyleSheet, View} from "react-native"
import { Image } from 'expo-image'
import { useLocalSearchParams,  useRouter} from "expo-router"
import { drinks } from './(tabs)/card'
import Button from '@/components/buttons'

export default function payment() { 
        const { id } = useLocalSearchParams();
        const drink = drinks.find(d => d.id === Number(id));  // Find the matching drink
        const router = useRouter(); 

        const changePage = () => {
                router.push({
                  pathname: "../qrcode",
                  params: {id: id}
                }); 
        };

        return<>
              <View style={styles.buttonContainer}>
                <Button label="Order Now" theme="primary" onPress={changePage} />
              </View>
        </>
}

const styles = StyleSheet.create({
        buttonContainer: {
                position: "absolute",
                bottom: 40,
                left: 20,
                right: 20,
        }
})