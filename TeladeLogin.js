import React, { useState } from 'react';
import { StyleSheet, View, Image, SafeAreaView, TouchableOpacity, TextInput, Text, Alert } from 'react-native';

const TeladeLogin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    console.log('Email:', email);
    console.log('Senha:', senha);
    navigation.navigate('Inicio');
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Image source={require('./assets/images/logo1.png')} style={styles.logo} />

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Digite seu E-mail"
            style={styles.form}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Digite sua Senha"
            style={styles.form}
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>ou</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={styles.socialButton} onPress={() => navigation.navigate('Inicio')}>
          <Image source={require('./assets/images/google.png')} style={styles.iconLarge} />
          <Text style={styles.socialButtonText}>Entrar com Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton} onPress={() => navigation.navigate('Inicio')}>
          <Image source={require('./assets/images/facebook.png')} style={styles.iconLarge} />
          <Text style={styles.socialButtonText}>Entrar com Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.textButton}>
          <Text style={styles.textLink}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.textButton} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.textLink}>
            Não tem uma conta? <Text style={styles.boldText}>Cadastre-se</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TeladeLogin;

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
    width: 280,
    height: 200,
    marginBottom: 20,
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
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '90%',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  dividerText: {
    color: '#CCCCCC',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
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
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 10,
    width: '90%',
    justifyContent: 'center',
    marginTop: 10,
  },
  iconLarge: {
    width: 32, // Aumentando o tamanho do ícone
    height: 32,
    marginRight: 10,
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
