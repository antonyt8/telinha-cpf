import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CPF = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState('');

  const navigateToVerification = () => {
    navigation.navigate('Verification'); // Nome da rota para a tela de verificação
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./image.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Insira seu CPF: </Text>
      
      <TextInput
        style={styles.input}
        value={code}
        onChangeText={setCode}
        placeholder="CPF"
        keyboardType="numeric"
        maxLength={11}
      />
      <TouchableOpacity style={styles.button} onPress={navigateToVerification}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  logo: {
    width: 150, // Ajuste a largura conforme necessário
    height: 150, // Ajuste a altura conforme necessário
    marginBottom: 20
  }
});

export default CPF;
