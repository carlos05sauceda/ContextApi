import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useContextReceta } from '../Providers/RecetaProvider'

export default function ListaRecetas() {
  
  
  const { receta, eliminarReceta } = useContextReceta()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista Recetas</Text>

      <FlatList
        style={styles.task}
        data={receta}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Text>Id Receta: {item.id}</Text>
            <Text>Nombre: {item.nombre}</Text>
            <Text>Fecha: {item.fecha}</Text>
            <Text>Ingrediente 1: {item.ingrediente1}</Text>
            <Text>Ingrediente 2: {item.ingrediente2}</Text>
            <Text>Ingrediente 3: {item.ingrediente3}</Text>
            <Text>Ingrediente 4: {item.ingrediente4}</Text>
            <Text>Ingrediente 5: {item.ingrediente5}</Text>
            
            
            <TouchableOpacity 
              style={styles.botonEliminar} 
              onPress={() => eliminarReceta(item.id)}
            >
              <Text style={styles.textoBoton}>Eliminar Receta</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  task: {
    flex: 1,
  },
  cardContainer: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  botonEliminar: {
    backgroundColor: '#ff4444',
    padding: 10,
    borderRadius: 10,
    marginTop: 12,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
  },
})
