import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import sacola from './assets/ilustracions/sacola.png';
import lupa from './assets/ilustracions/lupa.png';
import moto from './assets/ilustracions/moto.png';
import carrinho from './assets/ilustracions/carrinho.png';
import perfil from './assets/ilustracions/perfil.png';

const TeladeInicio = ({ navigation }) => {
  const promoProducts = [
    { img: require('./assets/images/dipirona.png'), name: 'Dipirona', oldPrice: 'R$ 4,50', newPrice: 'R$ 3,75' },
    { img: require('./assets/images/florax.png'), name: 'Florax', oldPrice: 'R$ 88,00', newPrice: 'R$ 79,00' },
    { img: require('./assets/images/odansetrona.png'), name: 'Odansetrona', oldPrice: 'R$ 12,00', newPrice: 'R$ 10,00' },
  ];

  const popularProducts = [
    { img: require('./assets/images/geldelimpeza.png'), name: 'Gel de Limpeza', price: 'R$ 45,00' },
    { img: require('./assets/images/creatina.png'), name: 'Creatina 300g', price: 'R$ 80,00' },
    { img: require('./assets/images/testedegravidez.png'), name: 'Teste de Gravidez', price: 'R$ 10,00' },
  ];

  const categories = [
    { name: 'Higiene', img: require('./assets/images/shampoo.png') },
    { name: 'Beleza', img: require('./assets/images/hidratantefacil.png') },
    { name: 'Kits Visuais', img: require('./assets/images/geleserum.png') },
    { name: 'Fitness', img: require('./assets/images/whey.png') },
  ];

  const handleDestaquesPress = () => {
    Alert.alert('Desculpe', 'Peço desculpas, mas essa tela ainda está em desenvolvimento... logo ela estará em funcionamento.');
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Image source={require('./assets/images/logo2.png')} style={styles.logo} resizeMode="contain" />
        </View>

        <View style={styles.searchContainer} onPress={() => navigation.navigate('Pesquisa')}>
          <Image source={lupa} style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="O que você quer hoje?" placeholderTextColor="#999" />
        </View>

        <TouchableOpacity onPress={handleDestaquesPress}>
          <Text style={styles.sectionTitle}>Destaques</Text>
          <View style={styles.categoriesContainer}>
            {categories.map((item, index) => (
              <View key={index} style={styles.categoryItem}>
                <View style={styles.categoryCircle}>
                  <Image source={item.img} style={styles.categoryImage} />
                </View>
                <Text style={styles.categoryLabel}>{item.name}</Text>
              </View>
            ))}
          </View>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Promoções do Dia</Text>
        <View style={styles.productsContainer}>
          {promoProducts.map((item, index) => (
            <View key={index} style={styles.productBox}>
              <Image source={item.img} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.oldPrice}>{item.oldPrice}</Text>
              <Text style={styles.newPrice}>{item.newPrice}</Text>
              <TouchableOpacity style={styles.buyButton} onPress={() => navigation.navigate('Produto')}>
                <Text style={styles.buyButtonText}>Comprar</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Populares e Mais Vendidos</Text>
        <View style={styles.productsContainer}>
          {popularProducts.map((item, index) => (
            <View key={index} style={styles.productBox}>
              <Image source={item.img} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.newPrice}>{item.price}</Text>
              <TouchableOpacity style={styles.buyButton} onPress={() => navigation.navigate('Produto')}>
                <Text style={styles.buyButtonText}>Comprar</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Rodapé Atualizado */}
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
      </ScrollView>
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
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  categoryItem: {
    alignItems: 'center',
  },
  categoryCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#5271FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  categoryLabel: {
    color: '#5271FF',
    marginTop: 5,
    textAlign: 'center',
  },
  productsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginHorizontal: 10,
  },
  productBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    width: 120,
    marginBottom: 10,
    shadowColor: '#000',
    elevation: 3,
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#5271FF',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#656060',
    fontSize: 14,
  },
  newPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5271FF',
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
});

export default TeladeInicio;