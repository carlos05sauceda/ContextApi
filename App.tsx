import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navegacion from './componentes/Navegacion';
import ProviderEstudiante from './providers/ProviderEstudiante';

export default function App() {
  return (
    
    <ProviderEstudiante>
      <Navegacion></Navegacion>
    </ProviderEstudiante>

  );
}
