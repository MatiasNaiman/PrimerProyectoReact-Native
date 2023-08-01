import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import FlatlistTragos from './src/components/FlatlistTragos';

const FotoDeFondo = require('./assets/background/playita.jpg');
const FotoDeFondo2 = require('./assets/background/betsson.png');

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={FotoDeFondo} resizeMode="cover" style={styles.backgroundImage}>
        <Text style={styles.titulo}>La tequileria del Furro:</Text>
        <FlatlistTragos style={styles.text} />
        <StatusBar style="auto" />
        <Image source={FotoDeFondo2} resizeMode="contain" style={styles.image} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    left: 15,
    alignItems: 'center',
    textAlign: 'left',
    fontSize: 25,
    fontStyle: 'italic',
    marginBottom: 10,
    marginTop: 15,
  },
  container: {
    marginTop: 50,
    display: 'flex',
    flex: 1,
    width: 'center',
    alignItems: 'left',
    justifyContent: 'left',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%', // Adjust the width here, e.g., '100%' or a specific number like 300
    height: '100%', // Adjust the height here, e.g., '100%' or a specific number like 200
  },
});
