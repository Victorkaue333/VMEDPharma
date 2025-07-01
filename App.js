import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TeladeLogin from './TeladeLogin'; 
import TeladeCadastro from './TeladeCadastro';
import TeladeSaudacao from './TeladeSaudacao';
import TeladeInicio from './TeladeInicio';
import TeladeCarrinho from './TeladeCarrinho';
import TeladePesquisa from './TeladePesquisa'
import TeladePerfil from './TeladePerfil';
import TeladeRastreamento from './TeladeRastreamento';
import TeladePagamento from './TeladePagamento';
import TeladeProduto from './TeladeProduto';


function TelaHome({ navigation }) {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Image source={require('./assets/images/logo1.png')} style={styles.logo}/>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')} // Navega para a tela de login
        >
          <Text style={styles.buttonText}>Iniciar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// Cria a pilha
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={TelaHome}
          options={{ headerShown: false }} // Oculta o cabeçalho na tela principal
        />
        <Stack.Screen
          name="Login"
          component={TeladeLogin}
          options={{ headerShown: false }} // Oculta o cabeçalho na tela de login
        />
        <Stack.Screen
          name="Cadastro"
          component={TeladeCadastro} // Adiciona a tela de cadastro
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Saudacao"
          component={TeladeSaudacao} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Inicio"
          component={TeladeInicio} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Carrinho"
          component={TeladeCarrinho} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Pesquisa"
          component={TeladePesquisa} o
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Perfil"
          component={TeladePerfil} o
          options={{ headerShown: false }} 
      />
      <Stack.Screen
          name="Rastreamento"
          component={TeladeRastreamento} o
          options={{ headerShown: false }} 
      />
       <Stack.Screen
          name="Pagamento"
          component={TeladePagamento} o
          options={{ headerShown: false }} 
      />
       <Stack.Screen
          name="Produto"
          component={TeladeProduto} o
          options={{ headerShown: false }} 
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#002336',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#002336',
  },
  logo: {
    width: 300,
    height: 250,
    marginBottom: 40,
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