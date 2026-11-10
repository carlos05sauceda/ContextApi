import React, { createContext, useContext, useState } from 'react'
import { View, Text } from 'react-native'
import { Recetas } from '../modelos/Recetas'
import { Plantilla } from '../modelos/Plantilla'
import { ContextRecetas } from '../Contextos/ContextRecetas'

export default function RecetaProviders({ children }: Plantilla) {

  const [receta, setReceta] = useState<Receta[]>([]);

  function agregarReceta(recetaparam: Receta) {
    setReceta([...receta, recetaparam]);
  }

 
  const buscarReceta = (id: string | number) => {
    return receta.find((item) => item.id.toString() === id.toString().trim());
  };

  const eliminarReceta = (id: number) => {
    setReceta((recetasActuales) => recetasActuales.filter((item) => item.id !== id));
  };

  return (
    <ContextRecetas.Provider value={{ receta, setReceta, agregarReceta, buscarReceta, eliminarReceta }}>
      {children}
    </ContextRecetas.Provider>
  )
}

export const useContextReceta = () => {
  return useContext(ContextRecetas);
}
