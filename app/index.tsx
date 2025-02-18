import {useRouter} from "expo-router";
import React, {useEffect} from "react";
import { Text, View, StyleSheet} from "react-native";


export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to Home after 3 seconds
      router.replace('/card'); // You can replace with 'navigate' if you want a stack push instead
    }, 1500);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [router]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Splash Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});


