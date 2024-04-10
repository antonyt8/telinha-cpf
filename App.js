
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CPF from './cpf';
import VerificationScreen from './verificationScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CPF">
        <Stack.Screen name="CPF" component={cpf} options={{ title: 'Inserir CPF' }} />
        <Stack.Screen name="Verification" component={verificationScreen} options={{ title: 'Verificar Código' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

