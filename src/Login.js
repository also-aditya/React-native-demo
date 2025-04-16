import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Login({ navigation }) {
  const [phone, setPhone] = useState('');

  const handleLogin = () => {
    if (/^\d{10}$/.test(phone)) {
      navigation.navigate('Dashboard');
    } else {
      alert('Enter a valid 10-digit phone number');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome 👋</Text>
      <Text style={styles.subtitle}>Enter your phone number to continue</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="numeric"
        value={phone}
        onChangeText={setPhone}
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#f6f7fb' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  subtitle: { fontSize: 16, marginBottom: 30, color: '#555', textAlign: 'center' },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 12, padding: 14, marginBottom: 20,
    backgroundColor: '#fff', fontSize: 16
  },
  button: {
    backgroundColor: '#4a90e2',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center'
  },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' }
});
