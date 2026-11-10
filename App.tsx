import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navegacion from './components/Navegacion';
import RecetaProviders from './Providers/RecetaProvider';

export default function App() {
  return (
    
    <RecetaProviders>
      <Navegacion></Navegacion>
    </RecetaProviders>

  );
}
