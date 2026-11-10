import { View, Text, Alert } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import ListaRecetas from '../pages/ListaRecetas';
import BusquedaRecetas from '../pages/BusquedaRecetas';
import { NavigationContainer } from '@react-navigation/native';


export default function Navegacion() {

    const tab = createBottomTabNavigator();


    return (

        <NavigationContainer>
            <tab.Navigator>

                <tab.Screen component={Home} name='Home'></tab.Screen>
                <tab.Screen component={ListaRecetas} name='Lista'></tab.Screen>
                <tab.Screen component={BusquedaRecetas} name='Busqueda'></tab.Screen>
                 
            </tab.Navigator>
        </NavigationContainer>

    )
}