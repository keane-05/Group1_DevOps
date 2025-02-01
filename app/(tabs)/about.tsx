import React from 'react'
import {Text, Pressable, StyleSheet, View} from "react-native"
import Card from '@/components/card'

export default function About() { 
    return (
        <View style={Styles.container}>
            <Text style={Styles.text}>Made by a few people ig</Text>
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