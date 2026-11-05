import { View, Text, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { Plantilla } from './Plantilla'
import { Estudiante } from '../modelos/Estudiante'
import { ContextEstudiante } from '../Contextos/ContextEstudiante';



export default function ProviderEstudiante(prop: Plantilla) {

    const [estudianteLista, setEstudianteLista] = useState<Estudiante[]>([]);

    function agregarEstudiante(estudiante: Estudiante) {
        setEstudianteLista([...estudianteLista, estudiante]);
        Alert.alert('Creacion de Estudiante', 'Estudiante Agregado')
    }

    return (
        <ContextEstudiante.Provider value={{ estudianteLista, agregarEstudiante }}>
            {prop.children}
        </ContextEstudiante.Provider>
    )
}

export const useContextEstudiante = () => {
    return useContext(ContextEstudiante)
}