import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FlatlistTragos from './src/components/FlatlistTragos';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Tragos:</Text>
      <FlatlistTragos />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    width:'center',
    backgroundColor: '#00000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
