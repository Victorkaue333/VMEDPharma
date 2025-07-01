import React from 'react'; 
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import sacola from './assets/ilustracions/sacola.png';
import lupa from './assets/ilustracions/lupa.png';
import moto from './assets/ilustracions/moto.png';
import carrinho from './assets/ilustracions/carrinho.png';
import perfil from './assets/ilustracions/perfil.png';
import pix from './assets/images/pix.png';
import nupay from './assets/images/nupay.png';
import mastercard from './assets/images/mastercard.png';
import visa from './assets/images/visa.png';

const TelaPagamento = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.contentContainer}>
        {/* Cabeçalho */}
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle} >Aba de Pagamento</Text>
        </View>

        {/* Seção de Pagamento */}
        <View style={styles.paymentContainer}>
          <Text style={styles.sectionTitle} >Como você prefere pagar?</Text>
          <View style={styles.paymentOptions}>
            <Text style={styles.paymentOptionTitle}>Pagamento rápido</Text>
          <View style={styles.quickPaymentContainer}>
              <Image source={pix} style={styles.paymentIcon} />
              <Image source={nupay} style={styles.paymentIcon} />
            </View>

            {/* Cartões Cadastrados */}
            <Text style={styles.paymentOptionTitle}>Cartão de crédito/débito</Text>
            <TouchableOpacity style={styles.cardContainer}>
              <Image source={visa} style={styles.cardIcon} />
              <View>
                <Text style={styles.cardHolder}>Gilberto Gil</Text>
                <Text style={styles.cardNumber}>**** **** **** 7220</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.cardContainer}>
              <Image source={mastercard} style={styles.cardIcon} />
              <View>
                <Text style={styles.cardHolder}>Gilberto Gil</Text>
                <Text style={styles.cardNumber}>**** **** **** 0800</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.addCardButton}>
              <Text style={styles.addCardText}>Adicionar cartão de crédito/débito</Text>
            </TouchableOpacity>
          </View>

          {/* Botão de Finalizar */}
          <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate('Rastreamento')}>
            <Text style={styles.checkoutButtonText}>Ir para a tela de rastreamento</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Rodapé */}
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Inicio')}>
          <Image source={sacola} style={styles.footerIcon} />
          <Text style={styles.footerText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Pesquisa')}>
          <Image source={lupa} style={styles.footerIcon} />
          <Text style={styles.footerText}>Pesquisar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Rastreamento')}>
          <Image source={moto} style={styles.footerIcon} />
          <Text style={styles.footerText}>Rastreamento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Carrinho')}>
          <Image source={carrinho} style={styles.footerIcon} />
          <Text style={styles.footerText}>Carrinho</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Perfil')}>
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
  },
  headerContainer: {
    backgroundColor: '#002336',
    padding: 15, // Padding geral
    paddingTop: 35, // Aumenta o padding no topo
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  backButton: {
    position: 'absolute', // Posiciona o botão absolutamente
    top: 40, // Distância do topo
    left: 20, // Distância da esquerda
    zIndex: 1, // Garante que o botão fique acima de outros elementos
  },

  paymentContainer: { 
    padding: 20 
  },

  sectionTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#5271FF', 
    marginBottom: 10 
  },

  paymentOptionTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color:'#5271FF', 
    marginBottom: 10 
  },

  quickPaymentContainer: { 
    flexDirection: 'row', 
    marginBottom: 20 
  },

  paymentIcon: { 
    width: 90, 
    height: 90, 
    marginRight: 10 
  },

  cardContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#f0f0f0', 
    padding: 15, 
    borderRadius: 10, 
    marginBottom: 10,
    borderWidth: 1, 
    borderColor: '#ccc' 
  },

  cardIcon: { 
    width: 40, 
    height: 30, 
    marginRight: 10 
  },

  cardHolder: { 
    fontSize: 14, 
    fontWeight: 'bold', 
    color: '#555' 
  },

  cardNumber: { 
    fontSize: 14, 
    color: '#777' 
  },

  addCardButton: { 
    padding: 15, 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 10, 
    marginBottom: 10 
  },

  addCardText: { 
    fontSize: 14, 
    color: '#5271FF', 
    fontWeight: 'bold' 
  },

  checkoutButton: { 
    backgroundColor: '#5271FF', 
    padding: 15, 
    borderRadius: 10, 
    alignItems: 'center', 
    margin: 20 
  },

  checkoutButtonText: { 
    color: '#FFF', 
    fontSize: 16, 
    fontWeight: 'bold' 
  },

  footerContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    backgroundColor: '#002336', 
    paddingVertical: 15 
  },

  footerItem: { 
    alignItems: 'center' 
  },

  footerIcon: { 
    width: 30, 
    height: 30, 
    tintColor: '#FFF' 
  },

  footerText: { 
    color: '#FFF', 
    fontSize: 12, 
    marginTop: 5 
  },
});

export default TelaPagamento;
