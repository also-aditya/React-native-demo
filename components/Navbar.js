import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const navItems = [
  { name: 'Home', icon: 'home-outline' },
  { name: 'Profile', icon: 'person-outline' },
  { name: 'Settings', icon: 'settings-outline' }
];

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      {navItems.map(item => (
        <View key={item.name} style={styles.navItem}>
          <Icon name={item.icon} size={22} color="white" />
          <Text style={styles.navText}>{item.name}</Text>
        </View>
      ))}
    </View>
  );
}

export { navItems };

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#4a90e2',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  navItem: { alignItems: 'center' },
  navText: { color: 'white', fontSize: 12, marginTop: 4 }
});
