import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importa o ícone de seta
import sacola from './assets/ilustracions/sacola.png';
import lupa from './assets/ilustracions/lupa.png';
import moto from './assets/ilustracions/moto.png';
import carrinho from './assets/ilustracions/carrinho.png';
import perfil from './assets/ilustracions/perfil.png';

const TeladeCarrinho = ({ navigation }) => {
  // Estado para os itens do carrinho
  const [cartItems, setCartItems] = useState([
    { id: 1, img: require('./assets/images/florax.png'), name: 'Florax', price: 79.0, quantity: 1 },
    { id: 2, img: require('./assets/images/creatina.png'), name: 'Creatina', price: 80.0, quantity: 1 },
    { id: 3, img: require('./assets/images/geldelimpeza.png'), name: 'Gel de Limpeza', price: 45.0, quantity: 1 },
  ]);

  // Função para adicionar mais um item
  const addItem = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Função para diminuir a quantidade de um item
  const removeItem = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Função para excluir um item do carrinho
  const deleteItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Função para calcular o valor total
  const calculateTotal = () => {
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const deliveryFee = 5.0; // Taxa de entrega fixa
    return subtotal + deliveryFee;
  };

  // Função para calcular o número total de itens
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.contentContainer}>
        {/* Cabeçalho */}
        <View style={styles.headerContainer}>
         {/* Botão de Voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#FFF" /> {/* Ícone de seta */}
      </TouchableOpacity>
          <Text style={styles.headerTitle}>Carrinho</Text>
        </View>

        {/* Seção de Entrega */}
        <View style={styles.deliveryContainer}>
          <Text style={styles.deliveryTitle}>Entrega</Text>
          <Text style={styles.deliveryAddress}>
            Rua Caldo de Carité, 981{'\n'}
            Santa Florença - Fictício
          </Text>
        </View>

        {/* Resumo do Pedido */}
        <View style={styles.orderSummary}>
          <Text style={styles.pedido}>Pedido</Text>
          <Text style={styles.orderText}>({totalItems} itens no seu carrinho)</Text>
          <Text style={styles.orderText}>Taxa de entrega: R$ 5,00</Text>
          <Text style={styles.totalPrice}>Valor Total: R$ {calculateTotal().toFixed(2)}</Text>
        </View>

        {/* Lista de Itens no Carrinho */}
        {cartItems.map((item, index) => (
          <View key={index} style={styles.cartItem}>
            <Image source={item.img} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>R$ {item.price.toFixed(2)}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity style={styles.quantityButtonmen1} onPress={() => removeItem(item.id)}>
                  <Text style={styles.quantityButtonText}>-1</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>Quantidade: {item.quantity}</Text>
                <TouchableOpacity style={styles.quantityButton} onPress={() => addItem(item.id)}>
                  <Text style={styles.quantityButtonText}>+1</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity style={styles.removeButton} onPress={() => deleteItem(item.id)}>
              <Text style={styles.removeButtonText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* Botão de Finalizar Pedido */}
        <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate('Pagamento')}>
          <Text style={styles.checkoutButtonText}>Finalizar Pedido</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Rodapé */}
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
  deliveryContainer: {
    padding: 15,
  },
  deliveryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5271FF',
  },
  deliveryAddress: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  orderSummary: {
    padding: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 15,
  },
  pedido:{
    fontSize: 20,
    color: '#5271FF',
    fontWeight: 'bold',
  },
  orderText: {
    fontSize: 14,
    color: '#555',
    
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemPrice: {
    fontSize: 14,
    color: '#555',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantityButtonmen1: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityButton: {
    backgroundColor: '#5271FF',
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },

  quantityButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 14,
    color: '#555',
    marginHorizontal: 10,
  },
  removeButton: {
    backgroundColor: '#E60000',
    padding: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#5271FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    margin: 20,
  },
  checkoutButtonText: {
    color: '#FFF',
    fontSize: 16,
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
   backButton: {
    position: 'absolute', // Posiciona o botão absolutamente
    top: 40, // Distância do topo
    left: 20, // Distância da esquerda
    zIndex: 1, // Garante que o botão fique acima de outros elementos
  },
});

export default TeladeCarrinho;