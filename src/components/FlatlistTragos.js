import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const FlatlistTragos = () => {
  return (
    <View>
      <FlatList
        data={[
          { key: '• Jhonny Walker Blue Label' },
          { key: '• Jhonny Walker Red Label' },
          { key: '• Jhonny Walker Black Label' },
          { key: '• Jhonny Walker Gold Label' },
          { key: '• Caipiroshka de Frutos Rojos' },
          { key: '• Fernet Cola' },
          { key: '• Malibu de Coco' },
          { key: '• Licor de Melon con Speed' },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    left: 15,
    fontSize: 15,
  }
});

export default FlatlistTragos;
