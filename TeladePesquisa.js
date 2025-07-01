import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import lupa from './assets/ilustracions/lupa.png';
import sacola from './assets/ilustracions/sacola.png';
import moto from './assets/ilustracions/moto.png';
import carrinho from './assets/ilustracions/carrinho.png';
import perfil from './assets/ilustracions/perfil.png';

const TeladePesquisa = ({ navigation }) => {
  // Dados fictícios para os itens mais pesquisados/sugestões
  const maisPesquisados = [
    { id: '1', name: 'Dipirona', price: 'R$ 3,75', image: require('./assets/images/dipirona.png') },
    { id: '2', name: 'Florax', price: 'R$ 79,00', image: require('./assets/images/florax.png') },
    { id: '3', name: 'Creatina 300g', price: 'R$ 80,00', image: require('./assets/images/creatina.png') },
    { id: '4', name: 'Gel de Limpeza', price: 'R$ 45,00', image: require('./assets/images/geldelimpeza.png') },
    { id: '5', name: 'Teste de Gravidez', price: 'R$ 10,00', image: require('./assets/images/testedegravidez.png') },
  ];

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.contentContainer}>
        {/* Cabeçalho */}
        <View style={styles.headerContainer}>
          <Image source={require('./assets/images/logo2.png')} style={styles.logo} resizeMode="contain" />
        </View>

        {/* Barra de Pesquisa */}
        <View style={styles.searchContainer} onPress={() => navigation.navigate('Pesquisa')}>
          <Image source={lupa} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="O que você quer hoje?"
            placeholderTextColor="#999"
          />
        </View>

        {/* Seção de Mais Pesquisados/Sugestões */}
        <Text style={styles.sectionTitle}>Mais pesquisados/sugestões</Text>
        <FlatList
          data={maisPesquisados}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.productBox}>
              <Image source={item.image} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
              <TouchableOpacity style={styles.buyButton} onPress={() => navigation.navigate('Produto')}>
                <Text style={styles.buyButtonText}>Comprar</Text>
              </TouchableOpacity>
            </View>
          )}
          contentContainerStyle={styles.carouselContainer}
        />
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
  headerContainer: {
    backgroundColor: '#002336',
    alignItems: 'center',
    height: 130,
  },
  logo: {
    width: 200,
    height: 190,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    padding: 10,
    margin: 20,
    alignItems: 'center',
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: '#999',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5271FF',
    marginLeft: 20,
    marginTop: 20,
  },
  carouselContainer: {
    paddingHorizontal: 10,
  },
  productBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    width: 140,
    marginHorizontal: 10,
    shadowColor: '#000',
    elevation: 3,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#5271FF',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5271FF',
    marginTop: 5,
  },
  buyButton: {
    backgroundColor: '#009311',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  buyButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#002336',
    paddingVertical: 15,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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
    tintColor: '#FFF',
  },
  footerText: {
    color: '#FFF',
    fontSize: 12,
    marginTop: 5,
  },
});

export default TeladePesquisa;
