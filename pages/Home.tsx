import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useContextEstudiante } from '../providers/ProviderEstudiante'
import { Estudiante } from '../modelos/Estudiante';
import ListaEstudiante from './ListaEstudiante';

export default function Home() {

    const { estudianteLista, agregarEstudiante } = useContextEstudiante();

    const [name, setName] = useState('')
   


    function agregar() {
        let estudiante: Estudiante = {
            id: Date.now().toString(),
            name: name
           }

        agregarEstudiante(estudiante)
    }

    useEffect(() => {
        console.log(estudianteLista)
    }, [estudianteLista])

    return (
        <View style={styles.container}>
            
        
            <TextInput placeholder='Nombre de Estudiante'
                value={name}
                onChangeText={setName}
            ></TextInput>

            <Button title='Agregar Estudiante' onPress={agregar}></Button>

        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});