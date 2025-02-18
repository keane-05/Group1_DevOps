import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert, ScrollView, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { drinks } from './(tabs)/card';
import Button from '@/components/buttons';
import { RadioButton } from 'react-native-paper';
import { StripeProvider, useStripe } from "@stripe/stripe-react-native";
import StripeApp from "@/components/stripe";

const PUBLISH_KEY = "pk_test_51QpvtcH6lYCFLgQA18yluYMLvFURh31EVmMaMhOsWvwcl7qerEvNNgxUYLeKyP11k4H3kva7ZTy7jTBSKIjZrW4g00VNm8caJs";



export default function Details() {
                const { id } = useLocalSearchParams();
                const drink = drinks.find(d => d.id === Number(id));  
        const [selectedValue, setSelectedValue] = useState("");


        return (
                <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
              >
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                      <Text style={styles.title}>Payment</Text>
          
                      {/* Payment Method Selection */}
                      <View style={styles.radioGroup}>
                        <Text style={styles.subtitle}>Select Payment Method:</Text>
                        <RadioButton.Group onValueChange={setSelectedValue} value={selectedValue}>
                          {[
                            { value: "cc", label: "Credit Card" },
                            { value: "pn", label: "PayLah! / PayNow" },
                            { value: "oth", label: "Others" },
                          ].map(({ value, label }) => (
                            <View key={value} style={styles.radioContainer}>
                              <RadioButton value={value} />
                              <Text style={styles.radioText}>{label}</Text>
                            </View>
                          ))}
                        </RadioButton.Group>
                      </View>
          
                      {/* Drink Information */}
                      {drink && (
                        <View style={styles.info}>
                          <Text style={styles.infotext}>Drink: {drink.name}</Text>
                          <Text style={styles.infotext}>Stock: {drink.stock}</Text>
                        </View>
                      )}
          
                      {/* Stripe Payment Section (Conditional Rendering) */}
                      {selectedValue === "cc" && (
                        <View style={styles.stripeContainer}>
                          <StripeProvider publishableKey={PUBLISH_KEY}>
                            <StripeApp />
                          </StripeProvider>
                        </View>
                      )}
          
                      {/* PayNow Button Section */}
                      {selectedValue === "pn" && (
                        <View style={styles.payNowContainer}>
                          <PayNowButton/>
                        </View>
                      )}
                    </View>
                  </TouchableWithoutFeedback>
                </ScrollView>
              </KeyboardAvoidingView>
        );
        }

        const PayNowButton = () => {


        const { initPaymentSheet, presentPaymentSheet } = useStripe();

        const handlePayment = async () => {
                const { id } = useLocalSearchParams();
                const drink = drinks.find(d => d.id === Number(id));  

                const router = useRouter(); 
                const changePage = () => {
                        router.push({ pathname: "/qrcode", params: { id:id } });

                }
                try {

                console.log('hello');

                const response = await fetch('http://192.168.1.16:3000/create-payment-intent', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ amount: 1000, currency: 'sgd', payment_method_types: ['paynow'] }),
                });

                const { paymentIntent, ephemeralKey, customer } = await response.json();

                // Initialize Payment Sheet
                const { error } = await initPaymentSheet({
                        paymentIntentClientSecret: paymentIntent,
                        customerId: customer,
                        customerEphemeralKeySecret: ephemeralKey,
                        merchantDisplayName: 'Payment',
                        returnURL: "myapp://stripe-redirect", // This is the return URL that Stripe will use after payment
                });

                if (!error) {
                        // Present Payment Sheet
                        const { error: paymentError } = await presentPaymentSheet();
                        if (paymentError) {
                        Alert.alert('Payment failed', paymentError.message);
                        } else {
                        //Alert.alert('Success', 'Payment completed!')
                        changePage()
                        console.log("IT WORKED WOOHOO")
                        }
                }
                
                } catch (error) {
                console.error(error);
                Alert.alert('Error', 'Something went wrong');
                }
        };

        return (
                <View style={styles.payNowContainer}>
                <Button label="Pay with PayNow" onPress={handlePayment} />
                </View>
        );
};

// Styles
const styles = StyleSheet.create({
scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
},
container: {
        width: "90%",
        backgroundColor: "#F5F5F5",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 5 },
        elevation: 3,
},
title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
},
subtitle: {
        fontSize: 18,
        fontWeight: "500",
        marginBottom: 10,
},
radioGroup: {
        width: "100%",
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
},
radioContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
},
radioText: {
        fontSize: 16,
        marginLeft: 10,
},
info: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 15,
        width: "100%",
        alignItems: "center",
        marginBottom: 20,
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
},
infotext: {      
        fontSize: 18,
        fontWeight: "500",
},
stripeContainer: {
        width: "100%",
        marginBottom: 20,
},
buttonContainer: {
        marginTop: 10,
},
payNowContainer: {
        marginBottom: 20,
},
});