import React, { useState } from 'react';
import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
type Props = {
  title: string;
  info: string;
  image: string;
  stock: string; 
  onPress?: () => void;
};

export default function Card({ title, info, image, stock, onPress }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const navigation = useNavigation(); // Access navigation object


  return (
    <View>
      <Pressable
        onPress = {onPress}
       onPressIn={() => setIsHovered(true)} // Mimic hover start
       onPressOut={() => setIsHovered(false)} // Mimic hover end
       style={[styles.card, isHovered && styles.cardHovered]}> 

          <View style={styles.cardContent}>
            {/* Left Image */}
            <Image source={image} style={styles.image} />
            {/* Right Content */}
            <View style={styles.textContent}>
              <Text style={styles.title}> {title}</Text>
              <Text style={styles.stock}> Stock: {stock}</Text>
              <Text style = {styles.stock}> {info}</Text>
            </View>
            {/* Clickable Icon */}

          </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  cardHovered: {
    backgroundColor: '#fff', // Change background on hover
    transform: [{ scale: 1.01 }], // Slight zoom effect
    shadowOpacity: 0.3, // Increase shadow intensity
  },
  card: {
    backgroundColor: '#f9f9f9', // Light cream background
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4, // Android shadow
    margin: 12,
    padding: 16,
  },
  cardContent: {
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Center vertically
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16, // Add space between image and text
  },
  textContent: {
    flex: 1, // Take up remaining space
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'left',
  },
  stock: {
    fontSize: 14,
    color: '#666',
    textAlign: 'left',
  },
//   iconButton: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   iconButtonLabel: {
//     marginTop: 4,
//     fontSize: 12,
//     textAlign: 'center',
//   },
});
