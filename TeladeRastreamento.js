import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import sacola from './assets/ilustracions/sacola.png';
import lupa from './assets/ilustracions/lupa.png';
import moto from './assets/ilustracions/moto.png';
import carrinho from './assets/ilustracions/carrinho.png';
import perfil from './assets/ilustracions/perfil.png';
import mapa from './assets/images/mapa.png';
import fone from './assets/ilustracions/fone.png';

const TeladeRastreamento = ({ navigation }) => {
  // Função para exibir a mensagem de agradecimento
  const handleConfirmarEntrega = () => {
    Alert.alert(
      'Obrigado!',
      'Obrigado por comprar em nossa loja, a VMed Pharma agradece pela preferência. Diante da ação entrega e confirmação de recebimento do ´produto...você será direcionado a tela de home.',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Inicio'), // Navega para a tela inicial após confirmar
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.contentContainer}>
        {/* Botão de Voltar */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>

        {/* Cabeçalho */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Rastreamento de Pedido</Text>
        </View>

        {/* Status do Pedido */}
        <View style={styles.statusContainer}>
          <Text style={styles.statusTitle}>Status do Pedido</Text>
          <View style={styles.statusStep}>
            <Text style={styles.statusText}>🟢 Pagamento</Text>
          </View>
          <View style={styles.statusStep}>
            <Text style={styles.statusText}>🟢 Em preparação</Text>
          </View>
          <View style={styles.statusStep}>
            <Text style={styles.statusText}>🟢 Motoboy a caminho</Text>
          </View>
          <View style={styles.statusStep}>
            <Text style={styles.statusText}>⚪ Entregue</Text>
          </View>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handleConfirmarEntrega} // Adicionado a função aqui
          >
            <Text style={styles.confirmButtonText}>Confirmar entrega</Text>
          </TouchableOpacity>
        </View>

        {/* Mapa */}
        <View style={styles.mapContainer}>
          <Text style={styles.mapTitle}>Localização em tempo real</Text>
          <Image source={mapa} style={styles.mapImage} />
        </View>

        {/* Contatos */}
        <View style={styles.contactsContainer}>
          <Text style={styles.contactsTitle}>Contatos</Text>
          <View style={styles.contactButtons}>
            <TouchableOpacity style={styles.contactButton}>
              <Image source={fone} style={styles.contactIcon} />
              <Text style={styles.contactText}>Motoboy</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.contactButton}>
              <Image source={fone} style={styles.contactIcon} />
              <Text style={styles.contactText}>Suporte</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Rodapé */}
      <View style={styles.footerContainer}>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('Inicio')}>
          <Image source={sacola} style={styles.footerIcon} />
          <Text style={styles.footerText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('Pesquisa')}>
          <Image source={lupa} style={styles.footerIcon} />
          <Text style={styles.footerText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('Rastreamento')}>
          <Image source={moto} style={styles.footerIcon} />
          <Text style={styles.footerText}>Rastreamento</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('Carrinho')}>
          <Image source={carrinho} style={styles.footerIcon} />
          <Text style={styles.footerText}>Carrinho</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('Perfil')}>
          <Image source={perfil} style={styles.footerIcon} />
          <Text style={styles.footerText}>Perfil</Text>
        </TouchableOpacity>
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
  statusContainer: {
    padding: 15,
  },
  statusTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5271FF',
    marginBottom: 10,
  },
  statusStep: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  statusText: {
    fontSize: 14,
    color: '#555',
  },
  confirmButton: {
    backgroundColor: 'green',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  mapContainer: {
    padding: 15,
  },
  mapTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5271FF',
    marginBottom: 10,
  },
  mapImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  contactsContainer: {
    padding: 15,
  },
  contactsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5271FF',
    marginBottom: 10,
  },
  contactButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  contactButton: {
    alignItems: 'center',
  },
  contactIcon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  contactText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#002336',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#002336',
    paddingVertical: 15,
  },
  footerItem: {
    alignItems: 'center',
  },
  footerIcon: {
    width: 30,
    height: 30,
    tintColor: '#FFF',
  },
  footerText: {
    color: '#FFF',
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

export default TeladeRastreamento;