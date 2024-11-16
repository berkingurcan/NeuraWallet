import { useRouter } from 'expo-router';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

import 'react-native-get-random-values';
import "@ethersproject/shims"

import {ethers} from "ethers"
import * as FileSystem from 'expo-file-system';

export default function WalletScreen() {
    const router = useRouter();

    async function createKeypair() {
        try {
            const wallet = ethers.Wallet.createRandom();
            const privateKey = wallet.privateKey;
            const publicKey = wallet.address;

            const envContent = `PRIVATE_KEY=${privateKey}\nPUBLIC_KEY=${publicKey}`;
            const envFilePath = `${FileSystem.documentDirectory}.env`;

            if (!FileSystem.documentDirectory) {
                throw new Error('FileSystem.documentDirectory is not accessible.');
            }

            await FileSystem.writeAsStringAsync(envFilePath, envContent);

            console.log("Ethereum key pair generated and saved to .env file:");
            console.log(`Private Key: ${privateKey}`);
            console.log(`Public Key: ${publicKey}`);
        } catch (error) {
            console.error("Error saving .env file:", error);
        }
    }

    const [text, setText] = React.useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Enter Your Pass Key</Text>
            <TextInput 
                mode="flat"
                value={text}
                onChangeText={setText}
                style={styles.input}
            />
            <Button
                mode="contained"
                onPress={async () => {
                    console.log("Creating keypair...");
                    await createKeypair();
                    router.push('/dashboard');
                }}
                style={styles.button}>
                Set Up Wallet
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    text: {
        marginBottom: 10,
        fontSize: 16,
        textAlign: 'center',
    },
    input: {
        width: '80%',
    },
    button: {
        marginTop: 10,
        width: '60%',
    },
});
