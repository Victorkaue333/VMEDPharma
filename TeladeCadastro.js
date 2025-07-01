import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image, Alert } from 'react-native';

const TeladeCadastro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmesuasenha, setConfirmesuasenha] = useState('');
  const [numeroparacontato, setNumeroparacontato] = useState('');

  const handleCadastro = () => {
    if (!nome || !sobrenome || !email || !senha || !confirmesuasenha || !numeroparacontato) {
        Alert.alert('Erro', 'Por favor, preencha todos os campos.');
        return;
    }

    console.log('Nome:', nome);
    console.log('Sobrenome:', sobrenome);
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('Confirme sua senha:', confirmesuasenha);
    console.log('Número para contato:', numeroparacontato);

    // Navegar para a tela de saudação após o cadastro
    navigation.navigate('Saudacao');
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Image source={require('./assets/images/logo1.png')} style={styles.logo} />

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Digite seu nome"
            style={styles.form}
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            placeholder="Digite seu sobrenome"
            style={styles.form}
            value={sobrenome}
            onChangeText={setSobrenome}
          />
          <TextInput
            placeholder="Digite seu e-mail"
            style={styles.form}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Digite sua senha"
            style={styles.form}
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />
          <TextInput
            placeholder="Confirme sua senha"
            style={styles.form}
            value={confirmesuasenha}
            onChangeText={setConfirmesuasenha}
            secureTextEntry
          />
          <TextInput
            placeholder="Digite seu número para contato"
            style={styles.form}
            value={numeroparacontato}
            onChangeText={setNumeroparacontato}
            keyboardType="phone-pad" // Para entrada de telefone
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleCadastro}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.textButton} 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.textLink}>
            Já tem uma conta? <Text style={styles.boldText}>Faça login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TeladeCadastro;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#002336',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 250, // Ajuste o tamanho conforme necessário
    height: 200, // Ajuste o tamanho conforme necessário
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  form: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 15,
    marginBottom: 15,
    width: '90%',
    borderRadius: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 15,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textButton: {
    alignItems: 'center',
    marginVertical: 5,
  },
  textLink: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  boldText: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  }
});