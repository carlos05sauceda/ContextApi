import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useContextReceta } from '../Providers/RecetaProvider';

export default function Home() {


    const { agregarReceta } = useContextReceta();

    const [nombre, setNombre] = useState('');
    const [fecha, setFecha] = useState('');
    const [ingrediente1, setIngrediente1] = useState('');
    const [ingrediente2, setIngrediente2] = useState('');
    const [ingrediente3, setIngrediente3] = useState('');
    const [ingrediente4, setIngrediente4] = useState('');
    const [ingrediente5, setIngrediente5] = useState('');



    function callAgregarReceta() {
        const receta = {
            id: Date.now().toString(),
            nombre: nombre,
            fecha: fecha,
            ingrediente1: ingrediente1,
            ingrediente2: ingrediente2,
            ingrediente3: ingrediente3,
            ingrediente4: ingrediente4,
            ingrediente5: ingrediente5,
        }

        agregarReceta(receta);
        setNombre('');
        setFecha('');
        setIngrediente1('');
        setIngrediente2('');
        setIngrediente3('');
        setIngrediente4('');
        setIngrediente5('');

        Alert.alert('Agregar Receta', 'Receta agregada')
    }




    return (
        <View>
            <Text style={styles.title}>Agregar Recetas</Text>
            <TextInput placeholder='Ingrese el nombre de la receta: '
                style = {styles.input}
                value={nombre}
                onChangeText={setNombre}
            />
            <TextInput placeholder='Ingrese la fecha: '
                style = {styles.input}
                value={fecha}
                onChangeText={setFecha}
            />
            <TextInput placeholder='Ingrese el primer ingrediente'
                style = {styles.input}
                value={ingrediente1}
                onChangeText={setIngrediente1}
            />

             <TextInput placeholder='Ingrese el segundo ingrediente'
                style = {styles.input}
                value={ingrediente2}
                onChangeText={setIngrediente2}
            />


             <TextInput placeholder='Ingrese el tercer ingrediente'
                style = {styles.input}
                value={ingrediente3}
                onChangeText={setIngrediente3}
            />


             <TextInput placeholder='Ingrese el cuarto ingrediente'
                style = {styles.input}
                value={ingrediente4}
                onChangeText={setIngrediente4}
            />


             <TextInput placeholder='Ingrese el quinto ingrediente'
                style = {styles.input}
                value={ingrediente5}
                onChangeText={setIngrediente5}
            />



            <Button  title='Agregar Receta' onPress={() => { callAgregarReceta() }} 
            
                />

        </View>
    )
}


const styles = StyleSheet.create({
  
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' },
  
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginRight: 100 ,  marginBottom: 10,},
  
});