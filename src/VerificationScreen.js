import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const VerificationScreen = () => {
  const [code, setCode] = useState('');

  const verifyCode = () => {

    // Lógica para verificar o código de verificação
    if (code === '12345') {
      // Código de verificação correto, você pode navegar para a próxima tela ou realizar outra ação aqui
      console.log('Código de verificação correto');
    } else {
      // Código de verificação incorreto, você pode exibir uma mensagem de erro para o usuário
      console.log('Código de verificação incorreto');
    }
  
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./image.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Insira o código de verificação enviado para o seu número/e-mail</Text>
      
      <TextInput
        style={styles.input}
        value={code}
        onChangeText={setCode}
        placeholder="Código de verificação"
        keyboardType="numeric"
        maxLength={6}
      />
      <TouchableOpacity style={styles.button} onPress={verifyCode}>
        <Text style={styles.buttonText}>Verificar código</Text>
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

export default VerificationScreen;

