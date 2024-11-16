import { router } from 'expo-router';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

import { ethers } from "ethers";
import * as fs from "react-native-fs";

export default function WalletScreen() {

    function createKeypair() {
        const wallet = ethers.Wallet.createRandom();
        const privateKey = wallet.privateKey;
        const publicKey = wallet.address;

        const envContent = `PRIVATE_KEY=${privateKey}
                            PUBLIC_KEY=${publicKey}`;

        const envFilePath = path.resolve(__dirname, ".env");
        fs.writeFile(envFilePath, envContent, { encoding: "utf-8" });
        
        console.log("Ethereum key pair generated and saved to .env file:");
        console.log(`Private Key: ${privateKey}`);
        console.log(`Public Key: ${publicKey}`);
    }

    const [text, setText] = React.useState("");
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Enter Your Pass Key</Text>
            <TextInput 
                mode='flat'
                value={text}
                onChangeText={text => setText(text)}
                style={styles.input}
            />
            <Button
                mode="contained"
                onPress={() => {
                    router.push('/dashboard'); // Navigate to the Wallet screen
                    }}
                style={styles.button}>
                Set Up Wallet   
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1, // Makes the container fill the screen
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16, // Optional padding for better alignment
      backgroundColor: '#f5f5f5', // Optional background color for a cleaner look
    },
    text: {
      marginBottom: 10, // Adds space between the text and input
      fontSize: 16, // Adjust font size for better readability
      textAlign: 'center', // Center-align the text
    },
    input: {
      width: '80%', // Makes the input field 80% of the screen width
    },
    button: {
        marginTop: 10,
        width: '60%',
      },
  });
