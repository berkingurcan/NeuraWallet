import { Link, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/logo.png')}
        style={styles.reactLogo}
      />
      <Text variant="headlineLarge" style={styles.title}>
        NeuraWallet!
      </Text>
      <Text variant="bodyMedium" style={styles.description}>
        Discover the features of our app. You can manage your tasks, explore new opportunities, and much more. Start by setting up your wallet to unlock all features!
      </Text>
      <Button
        mode="contained"
        onPress={() => {
          console.log("setupwallet")
          router.push('/wallet'); // Navigate to the Wallet screen
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
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  reactLogo: {
    height: 150,
    width: 150,
    marginBottom: 20,
  },
  title: {
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    marginBottom: 20,
    textAlign: 'center',
    color: '#555',
  },
  button: {
    marginTop: 10,
    width: '60%',
  },
});
