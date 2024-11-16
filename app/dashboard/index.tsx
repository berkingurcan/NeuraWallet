import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Card, ProgressBar, FAB, Divider } from 'react-native-paper';

const Dashboard = () => {
  const walletBalance = 1.25; // Example ETH balance
  const dailySpendingCap = 0.5; // Daily spending limit in ETH
  const dailySpent = 0.2; // Amount spent today in ETH
  const remainingCap = dailySpendingCap - dailySpent;

  return (
    <View style={styles.container}>
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
