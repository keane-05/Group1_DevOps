import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import {Text, Pressable, StyleSheet} from "react-native"


type Props = { 
    icon: keyof typeof MaterialIcons.glyphMap;
    label:string;
    onPress: () =>void;
}
export default function add_items({icon, label, onPress}: Props){ 

<Pressable style={styles.iconButton} onPress={onPress}>
              <MaterialIcons name={icon} size={24} color="black" />
              <Text style={styles.iconButtonLabel}>{label}</Text>
            </Pressable>
}

const styles = StyleSheet.create({ 
    iconButton: { 
        justifyContent: "center",
        alignItems:"center",
    },
    iconButtonLabel: { 
        marginTop: 12, 
    },
})
