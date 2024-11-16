import React from 'react';
import { View, StyleSheet, Clipboard, Alert } from 'react-native';
import { Text, Button, Card, ProgressBar, FAB, Divider } from 'react-native-paper';

const Dashboard = () => {
  const walletBalance = 1.25; // Example ETH balance
  const dailySpendingCap = 0.5; // Daily spending limit in ETH
  const dailySpent = 0.2; // Amount spent today in ETH
  const remainingCap = dailySpendingCap - dailySpent;

  const publicKey = '0x1234567890abcdef1234567890abcdef12345678'; // Example public key
  const shortenedKey = `${publicKey.slice(0, 6)}...${publicKey.slice(-4)}`;

  const handleCopyToClipboard = () => {
    Clipboard.setString(publicKey);
    Alert.alert('Copied to Clipboard', 'Your public key has been copied.');
  };

  return (
    <View style={styles.container}>
      {/* Public Key Section */}
      <View style={styles.publicKeyContainer}>
        <Text variant="bodyLarge" style={styles.publicKeyLabel}>
          Your address:
        </Text>
        <Text selectable style={styles.publicKey}>
          {shortenedKey}
        </Text>
        <Button
          mode="text"
          icon="content-copy"
          onPress={handleCopyToClipboard}
          compact
          style={styles.copyButton}
        >
          Copy
        </Button>
      </View>

      {/* Wallet Balance */}
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge">Wallet Balance</Text>
          <Text variant="headlineLarge">{walletBalance} ETH</Text>
        </Card.Content>
      </Card>

      {/* Spending Cap Indicator */}
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge">Daily Spending Cap</Text>
          <ProgressBar
            progress={dailySpent / dailySpendingCap}
            color="#6200ea"
            style={styles.progressBar}
          />
          <Text>
            {remainingCap > 0
              ? `${remainingCap.toFixed(2)} ETH remaining`
              : `Spending limit exceeded`}
          </Text>
        </Card.Content>
      </Card>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <Button
          mode="contained"
          icon="send"
          onPress={() => console.log('Send Crypto')}
          style={styles.actionButton}
        >
          Send Crypto
        </Button>
        <Button
          mode="contained"
          icon="download"
          onPress={() => console.log('Receive Crypto')}
          style={styles.actionButton}
        >
          Receive Crypto
        </Button>
        <Button
          mode="contained"
          icon="history"
          onPress={() => console.log('View Transactions')}
          style={styles.actionButton}
        >
          View Transactions
        </Button>
      </View>

      <Divider style={styles.divider} />

      {/* Notifications */}
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge">Notifications</Text>
          <Text>- Transaction approved for 0.1 ETH</Text>
          <Text>- Spending limit updated to 0.5 ETH/day</Text>
        </Card.Content>
      </Card>

      {/* CTA */}
      <FAB
        icon="compass-outline"
        label="Explore More"
        onPress={() => console.log('Explore DApps')}
        style={styles.fab}
      />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  publicKeyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 8,
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  publicKeyLabel: {
    fontWeight: 'bold',
    marginRight: 8,
  },
  publicKey: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  copyButton: {
    marginLeft: 8,
  },
  card: {
    marginBottom: 16,
    padding: 8,
    backgroundColor: '#ffffff',
  },
  progressBar: {
    height: 10,
    marginVertical: 8,
    borderRadius: 5,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 4,
  },
  divider: {
    marginVertical: 16,
    backgroundColor: '#e0e0e0',
  },
  fab: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#6200ea',
  },
});
