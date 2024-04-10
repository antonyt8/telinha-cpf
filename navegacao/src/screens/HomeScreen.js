import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavButton from '../components/NavButton';

// ...
export default function HomeScreen(){
  const toScrollViewScreen = () => {
    navigation.navigate('ScrollView')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, mundo!</Text>
      <StatusBar style="auto" />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={toNavigationScreen}
      >
        <Text style={styles.buttonText}>Aula de Navegação</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={toScrollViewScreen}
      >
        <Text style={styles.buttonText}>Aula de ScrollView</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    color: '#f64348'
  }
})   