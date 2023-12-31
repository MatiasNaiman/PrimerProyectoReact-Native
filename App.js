import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput, SafeAreaView, Pressable, FlatList } from 'react-native';
import  TragosList from './src/components/TragosList';

const FotoDeFondo = require('./assets/playita.jpg');
const FotoDeFondo2 = require('./assets/betsson.jpg');

export default function App() {
  const [trago, handleTragoChange] = useState('');

  return (
    <ImageBackground source={FotoDeFondo} resizeMode="cover" style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>La Tequileria del Furro:</Text>
        <View style={styles.rectangle}>
          <TragosList/>
          <Text>{'\n'}{'\n'}</Text>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  titulo: {
    left: 15,
    alignItems: 'center',
    textAlign: 'left',
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight:'bold',
    marginBottom: 15,
  },
  text: {
    fontSize: 15,
  },
  negrita: {
    fontWeight: 'bold',
  },
  container: {
    display: 'flex',
    top: '1.5%',
    margin: 20,
    flex: 1,
    width: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  input: {
    height: '10%',
    width: '86%',
    borderWidth: 2,
    backgroundColor: '#FFFFFF',
    padding: 1,
  },
  rectangle: {
    width: '86%',
    height: '75%',
    backgroundColor: 'rgba(256, 256, 256, 0.5)',
    borderRadius: 10,
    alignItems: 'center',
  },
});
