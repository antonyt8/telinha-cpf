import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Modal, ActivityIndicator } from 'react-native';

const VerificationScreen = () => {
  const [code, setCode] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar a visibilidade do modal
  const [progressLoad, setProgressLoad] = useState(false); // Estado para controlar o indicador de progresso

  const handleLogin = () => {
    // Lógica de login aqui
    // Abre o modal ao clicar em "Entrar"
    setModalVisible(true);
  };

  const verifyCode = () => {
    // Lógica para verificar o código de verificação
    if (code === '123456') {
      // Código de verificação correto, exibe o modal
      // setModalVisible(true);
      console.log('Código de verificação correto');
      alert('Código de verificação correto');
    } else {
      // Código de verificação incorreto, você pode exibir uma mensagem de erro para o usuário
      console.log('Código de verificação incorreto');
      alert('Código de verificação incorreto');
    }
  };

  const verifyLogin = () => {
    // Lógica para verificar o código de verificação
    if (cpf === '12345678' && senha === '12345678' ) {
      // Código de verificação correto, exibe o modal
      setModalVisible(true);
      console.log('Código de verificação correto');
      alert('Código de verificação correto');
    } else {
      // Código de verificação incorreto, você pode exibir uma mensagem de erro para o usuário
      console.log('Código de verificação incorreto');
      alert('Código de verificação incorreto');
    }
  };

  const handleForgotPassword = () => {
    // Lógica para ir para a tela de redefinição de senha
    // Você precisa implementar a navegação para a tela 'EsqueceuSenha' aqui
    console.log('Ir para a tela de redefinição de senha');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./image.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>LOGIN</Text>
      
      <TextInput
        style={styles.input}
        value={cpf}
        onChangeText={setCpf}
        placeholder="digite seu cpf"
        keyboardType="numeric"
        maxLength={11}
      />
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        placeholder="Digite sua senha"
        secureTextEntry={true}
        maxLength={11} // Esta propriedade oculta o texto digitado
      />

      <View>
        {progressLoad ? (
          <ActivityIndicator color="#c7222c" size="large" />
        ) : (
          <TouchableOpacity style={styles.button} onPress={verifyLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Esqueci minha senha?</Text>
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image
              source={require('./image.png')}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.title}>Insira o código de verificação</Text>
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
            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    width: 150,
    height: 150,
    marginBottom: 20
  },
  // Estilos para o modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo escuro transparente
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 20, // Adicionando margem superior para separar os botões
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default VerificationScreen;