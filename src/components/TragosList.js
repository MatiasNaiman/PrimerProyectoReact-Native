import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Tragos from './Tragos';

const TragosList = () => {
  const [expandedTragoId, setExpandedTragoId] = useState(null);

  const handleVerInfo = (tragoId) => {
    setExpandedTragoId(expandedTragoId === tragoId ? null : tragoId);
  };

  const renderItem = ({ item }) => {
    const isExpanded = item.id === expandedTragoId;

    return (
      <View style={styles.tragoContainer}>
        <View style={styles.tragoNombreContainer}>
          <Text style={styles.tragoNombre}>{item.nombre}</Text>
          <TouchableOpacity onPress={() => handleVerInfo(item.id)}>
            <Text style={styles.Button}>{isExpanded ? 'Ocultar info' : 'Ver info'}</Text>
          </TouchableOpacity>
        </View>
        {isExpanded && <Text style={styles.tragoDescripcion}>{item.descripcion}</Text>}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tragos Disponibles:</Text>
      <FlatList
        data={Tragos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems:'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  tragoContainer: {
    marginBottom: 16,
  },
  tragoNombreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tragoNombre: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  tragoDescripcion: {
    fontSize: 16,
  },
  Button: {
    marginLeft: 10,
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    opacity: 0.6,
    color: 'white',
    fontSize: 10,
  },
});

export default TragosList;
