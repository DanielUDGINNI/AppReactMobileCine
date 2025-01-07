//Daniel Alberto Vazquez Ramirez 218747235 Programacion para Internet
import * as React from 'react';
import { Component } from 'react';
import Constants from 'expo-constants';
import {
  Text,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  TouchableHighlight,
  Alert,
  Button,
  Picker,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import { SecondaryButton } from '../components/Button';

const DetailsScreen = ({ navigation, route }) => {
  const AltaDatos = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        /// console.log(xhttp.responseText())
      }
    };
    xhttp.open(
      'GET',
      'https://pro-gramacionvr.000webhostapp.com/insertarCarro.php?&nombre=' +
        nombre3 +
        '&moneda=' +
        moneda +
        '&precio=' +
        precio3,
      true
    );
    xhttp.send();
    Alert.alert('Se ha agregado al carrito con exito');
    navigation.navigate('BoardScreen');
    navigation.navigate('Home');
  };

  const item = route.params;
  console.log(item);
  const precio3 = item.precio;
  const nombre3 = item.name;
  //const cantidad3 =item.cantidad;
  const moneda = '$';
  this.cantidad3 = '1';
  //var cantidad = 1;
  //this.varNombre = precio3 ;

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Detalles</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
          }}>
          <Image source={item.image} style={{ height: 220, width: 220 }} />
        </View>
        <View style={style.detalle}>
          <View
            stye={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{ fontSize: 25, fontWeight: 'bold', color: COLORS.white }}>
              {item.name}
            </Text>
          </View>
          <Text style={style.textoDetalle}>{item.description}</Text>

          <View style={{ marginTop: 40, marginBottom: 40 }}>
            <SecondaryButton title="Agregar al carrito" onPress={AltaDatos} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    top: 15,
  },
  detalle: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    height: 610,
  },
  textoDetalle: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.white,
  },
});

export default DetailsScreen;
