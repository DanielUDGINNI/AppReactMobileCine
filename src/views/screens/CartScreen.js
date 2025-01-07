//Daniel Alberto Vazquez Ramirez 218747235 Programacion para Internet
import React, { Component, useState, useEffect } from 'react';
import Constants from 'expo-constants';
import {
  Text,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  Alert,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  TouchableHighlight,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import { SecondaryButton } from '../components/Button';
import { PrimaryButton } from '../components/Button';
import { ThirdButton } from '../components/Button';
import foods from '../../consts/foods';
import axios from 'axios';
import DatosPago from './Pago';
import HomeScreen from './HomeScreen';

const CartScreen = ({ navigation }) => {
  var total1 = '';

  const [lista, setLista] = useState([]);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function getCarrito() {
      const res = await axios.get(
        'https://pro-gramacionvr.000webhostapp.com/mostrar2.php'
      );
      const aPagar = await axios.get(
        'https://pro-gramacionvr.000webhostapp.com/calcula.php'
      );
      setLista(res.data);
      setTotal(aPagar.data);
    }
    for (var i = 0; i < 3; i++) {
      getCarrito();
    }
  }, []);

  const limpiarCarrito = async () => {
    await axios.get(
      'https://pro-gramacionvr.000webhostapp.com/limpiaCarro.php'
    );
    Alert.alert('Se ha eliminado el contenido del carrito');
    navigation.navigate('BoardScreen');
    navigation.navigate('Home');
  };

  return (
    <View style={style.containerCarrito}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Atras</Text>
      </View>
      <ScrollView>
        <FlatList
          style={{ marginTop: 10, fontsize: 30 }}
          data={lista}
          renderItem={({ item }) => (
            <View
              style={{
                justifyContent: 'center',
                marginBottom: 10,
                marginVertical: 10,
                marginHorizontal: 20,
                elevation: 15,
                borderRadius: 10,
                backgroundColor: COLORS.white,
                alignItems: 'center',
                paddingHorizontal: 10,
                height: 50,
              }}>
              <Text style={{ fontsize: 30 }}>
                {item.nombre}
                <Text> {item.moneda}</Text>
                {item.precio}
                <Text> </Text>
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.Codigo}
        />

        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 32,
              margin: 5,
              fontWeight: 'bold',
            }}>
            Total a pagar ${total}
          </Text>
        </View>
        <ThirdButton
          onPress={() => limpiarCarrito()}
          title="Cancelar carrito"
        />

        <PrimaryButton
          onPress={() => navigation.navigate('Pagar')}
          title="Pagar"
        />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    top: -20,
  },
  containerCarrito: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
});

export default CartScreen;
