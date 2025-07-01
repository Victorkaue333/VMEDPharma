import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importa o ícone de seta
import sacola from './assets/ilustracions/sacola.png';
import lupa from './assets/ilustracions/lupa.png';
import moto from './assets/ilustracions/moto.png';
import carrinho from './assets/ilustracions/carrinho.png';
import perfil from './assets/ilustracions/perfil.png';
import profile from './assets/ilustracions/profile.png';
import carrinhoprofile from './assets/ilustracions/profile.png';
import favoritos from './assets/ilustracions/favoritos.png';
import ppagamentos from './assets/ilustracions/ppagamentos.png';
import adress from './assets/ilustracions/adress.png';
import exit from './assets/ilustracions/exit.png';

const TeladePerfil = ({ navigation }) => {
  // Função para exibir a mensagem de "em desenvolvimento"
  const handleFavoritosPress = () => {
    Alert.alert('Desculpe', 'Peço desculpas, mas essa tela ainda está em desenvolvimento');
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.contentContainer}>
        {/* Cabeçalho */}
        <View style={styles.headerContainer}>
          {/* Botão de Voltar */}
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#FFF" /> {/* Ícone de seta */}
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Perfil</Text>
        </View>
        
        {/* Perfil do Usuário */}
        <View style={styles.profileContainer}>
          <TouchableOpacity style={styles.menuItem}><Image source={profile} style={styles.menuIcon} /></TouchableOpacity>
          <Text style={styles.userName}>Gilberto Gil</Text>
          <Text style={styles.userLocation}>Fictício, SN</Text>
        </View>
        
        {/* Botões de Histórico e Suporte */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.buttonLeft}>
            <Text style={styles.buttonText}>Histórico de Pedidos</Text>
            <Text style={styles.orderCount}>12</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRight}>
            <Text style={styles.buttonText}>Suporte ao Cliente</Text>
            <Text style={styles.supportIcon}>💁</Text>
          </TouchableOpacity>
        </View>
        
        {/* Menu de Opções */}
        <View style={styles.menuContainer}>
          {[
            { icon: profile, label: 'Perfil', screen: 'Perfil' },
            { icon: carrinhoprofile, label: 'Carrinho', screen: 'Carrinho' },
            { icon: favoritos, label: 'Favoritos', onPress: handleFavoritosPress }, // Adicionado onPress para Favoritos
            { icon: ppagamentos, label: 'Pagamentos', screen: 'Pagamento' },
            { icon: adress, label: 'Endereço de entrega', screen: 'Rastreamento' },
            { icon: exit, label: 'Sair', screen: 'Login' },
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={item.onPress || (() => item.screen && navigation.navigate(item.screen))} // Usa onPress se existir, caso contrário, navega para a tela
            >
              <Image source={item.icon} style={styles.menuIcon} />
              <Text> {item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Rodapé Fixo */}
      <View style={styles.footerContainer}>
        <View style={styles.imagesFooterContainer}>
          <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Inicio')}>
            <Image source={sacola} style={styles.imagesFooter} />
            <Text style={styles.footerText}>Início</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Pesquisa')}>
            <Image source={lupa} style={styles.imagesFooter} />
            <Text style={styles.footerText}>Pesquisar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Rastreamento')}>
            <Image source={moto} style={styles.imagesFooter} />
            <Text style={styles.footerText}>Rastreamento</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Carrinho')}>
            <Image source={carrinho} style={styles.imagesFooter} />
            <Text style={styles.footerText}>Carrinho</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Perfil')}>
            <Image source={perfil} style={styles.imagesFooter} />
            <Text style={styles.footerText}>Perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    paddingBottom: 80,
  },
  headerContainer: {
    backgroundColor: '#002336',
    padding: 15,
    paddingTop: 35,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#002336',
  },
  userLocation: {
    fontSize: 14,
    color: '#555',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  buttonLeft: {
    backgroundColor: '#3A60E4',
    flex: 1,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonRight: {
    backgroundColor: '#3A60E4',
    flex: 1,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  orderCount: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
  },
  supportIcon: {
    fontSize: 18,
    marginTop: 5,
  },
  menuContainer: {
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  menuIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginRight: 10,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#002336',
    paddingVertical: 15,
  },
  imagesFooterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  footerItem: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  imagesFooter: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: '#FFF', // Ícones brancos
  },
  footerText: {
    color: '#FFF', // Texto branco
    fontSize: 12,
    marginTop: 5,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
});

export default TeladePerfil;