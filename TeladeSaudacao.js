import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';

const TeladeSaudacao = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.logoContainer}>
        <Image source={require('./assets/images/logo1.png')} style={styles.logo} />
      </View>

      <View style={styles.container}>
        <Text style={styles.welcomeText}>Olá, seja bem-vindo!</Text>
        <Text style={styles.messageText}>
          Obrigado por se cadastrar na VMed Pharma! Estamos felizes em tê-lo conosco e prontos para cuidar da sua saúde com inovação e confiança.
        </Text>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Inicio')} // Navega para a tela de início
        >
          <Text style={styles.buttonText}>Ir para a Tela Inicial</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TeladeSaudacao;

const styles = StyleSheet.create({
  safeAreaView:{
    flex: 1,
    backgroundColor:'#002336', 
    justifyContent:'center',
    alignItems:'center',
  },
  logoContainer:{
    marginBottom:20,
  },
  logo: {
    width:250,
    height:200,
  },
  container: {
    alignItems:'center',
    backgroundColor:'#F3F3F3',
    borderRadius:10,
    padding:20,
    width:'90%',
    shadowColor:'#000',
    shadowOffset:{
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5, // Sombra para Android
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold', // Deixa o texto em negrito
    color: '#007bff', // Cor do texto igual à cor do botão
    marginBottom: 10,
    textAlign: 'center',
  },
  messageText: {
    fontSize: 16,
    color: '#002336', // Cor do texto
    marginBottom: 20,
    textAlign: 'center',
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
});