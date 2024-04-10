import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cpf from './screens/Cpf';
import VerificationScreen from './screens/VerificationScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createNativeStackNavigator()

export default function StackNavigator(){

    return (    
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'  screenOptions = {{ headerShown: false}}>
               
            <Stack.Screen  name='Verificação' component={VerificationScreen} />
            <Stack.Screen  name='Cpf' component={Cpf} />
            
            </Stack.Navigator>

        </NavigationContainer>
    )
}