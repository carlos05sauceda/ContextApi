import {StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { useContextEstudiante } from '../providers/ProviderEstudiante'
import { Estudiante } from '../modelos/Estudiante'

export default function ListaEstudiante() {


    

    const { estudianteLista } = useContextEstudiante()

    
    return (
        <View style={styles.containe}>
            <Text>Lista Estudiante</Text>
            
        
            {
                estudianteLista.map((estudiante: Estudiante) => (
                    <View key={estudiante.id}>

                        

                        <Text>Id Estudiante {estudiante.id}</Text>
                        <Text>Nombre Estudiante {estudiante.name}</Text>
                        </View>

                ))



            }
        </View>
    )
}

const styles = StyleSheet.create({
  containe: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});