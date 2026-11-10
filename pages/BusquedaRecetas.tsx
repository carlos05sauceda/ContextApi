import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useContextReceta } from '../Providers/RecetaProvider'; 

export default function BusquedaRecetas() {
  const [searchId, setSearchId] = useState('');
  const [recetaEncontrada, setRecetaEncontrada] = useState<any | null>(null);

  
  const { receta } = useContextReceta();

  const buscarPorId = () => {
    if (!searchId.trim()) {
      setRecetaEncontrada(null);
      return;
    }
    
    const resultado = receta.find((item: any) => item.id.toString() === searchId.trim());
    setRecetaEncontrada(resultado || null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar Receta por ID</Text>
      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ingresa el ID de la receta..."
          value={searchId}
          onChangeText={setSearchId}
          
        />

        <TouchableOpacity style={styles.botonBuscar} onPress={buscarPorId}>
          <Text style={styles.textoBoton}>Buscar</Text>
        </TouchableOpacity>

         
        
      </View>

      
      {recetaEncontrada ? (
        <View style={styles.card}>
          <Text style={styles.cardText}>Id Receta: {recetaEncontrada.id}</Text>
          <Text style={styles.cardText}>Nombre: {recetaEncontrada.nombre}</Text>
          <Text style={styles.cardText}>Fecha: {recetaEncontrada.fecha}</Text>
          <Text style={styles.cardText}>Ingrediente 1: {recetaEncontrada.ingrediente1}</Text>
          <Text style={styles.cardText}>Ingrediente 2: {recetaEncontrada.ingrediente2}</Text>
          <Text style={styles.cardText}>Ingrediente 3: {recetaEncontrada.ingrediente3}</Text>
          <Text style={styles.cardText}>Ingrediente 4: {recetaEncontrada.ingrediente4}</Text>
          <Text style={styles.cardText}>Ingrediente 5: {recetaEncontrada.ingrediente5}</Text>
        </View>
      ) : (
        searchId !== '' && <Text style={styles.noResult}>No se encontró ninguna receta con ese ID</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' },
  searchContainer: { flexDirection: 'row', marginBottom: 20 },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginRight: 10 },
  botonBuscar: { backgroundColor: '#007BFF', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15, borderRadius: 15 },
  textoBoton: { color: '#fff', fontWeight: 'bold' },
  card: { padding: 15, backgroundColor: '#f9f9f9', borderRadius: 8, borderWidth: 1, borderColor: '#eee' },
  cardText: { fontSize: 15, marginBottom: 4 },
  noResult: { color: 'red', textAlign: 'center', marginTop: 10 }
});