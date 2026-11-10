import { createContext } from "react";
import { Recetas } from "../modelos/Recetas";



export const ContextRecetas = createContext({
    receta: [] as Receta[],
    setReceta: (receta: Receta[]) => { },
    agregarReceta: (receta: Receta) => { },
    buscarReceta: (receta: Receta) => { },
    eliminarReceta: (receta: Receta) => {},
});