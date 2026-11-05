import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../pages/Home'
import ListaEstudiante from '../pages/ListaEstudiante'

export default function Navegacion() {

    const tab = createBottomTabNavigator()

    return (
        <NavigationContainer>
            <tab.Navigator>
                <tab.Screen component={Home} name='Home'></tab.Screen>
                <tab.Screen component={ListaEstudiante} name='Lista Estudiante'></tab.Screen>
            </tab.Navigator>
        </NavigationContainer>
    )
}