
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CPF from './src/Cpf';
import VerificationScreen from './src/VerificationScreen'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CPF">
        <Stack.Screen name="CPF" component={Cpf} options={{ title: 'Inserir CPF' }} />
        <Stack.Screen name="Verification" component={VerificationScreen} options={{ title: 'Verificar Código' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

