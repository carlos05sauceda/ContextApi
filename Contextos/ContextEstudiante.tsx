import { createContext } from "react";
import { Estudiante } from "../modelos/Estudiante";

export const ContextEstudiante = createContext({
    estudianteLista: [] as Estudiante[],
    agregarEstudiante: (estudiantes: Estudiante) => { }
})