import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../navegacao/src/screens/HomeScreen';
import NavigationsScreens from '../navegacao/src/screens/NavigationsScreen';
import ScrollViewScreen from '../navegacao/src/screens/ScrollViewScreen';
import FlatListScreen from '../navegacao/src/screens/FlatListScreen'

const Stack = createNativeStackNavigator()

export default function StackNavigator(){

    return (    
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'  screenOptions = {{ headerShown: false}}>
               
            <Stack.Screen  name='Home' component={HomeScreen} />
            <Stack.Screen  name='Navigation' component={NavigationsScreens} />
            <Stack.Screen  name='ScrollView' component={ScrollViewScreen} />
            <Stack.Screen  name='FlatListScreen' component={FlatListScreen} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}