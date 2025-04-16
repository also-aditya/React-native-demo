import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navbar, { navItems } from '../components/Navbar';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.content}>
        <Text style={styles.title}>👤 User Details</Text>
        <View style={styles.card}>
          <Text style={styles.detail}>Name: Jane Doe</Text>
          <Text style={styles.detail}>Email: jane@example.com</Text>
          <Text style={styles.detail}>Location: San Francisco</Text>
        </View>

        <Text style={[styles.title, { marginTop: 30 }]}>📋 Navbar Report</Text>
        <View style={styles.card}>
          {navItems.map((item, idx) => (
            <Text key={idx} style={styles.detail}>• {item.name}</Text>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f6f7fb' },
  content: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3
  },
  detail: { fontSize: 16, marginBottom: 8 }
});
