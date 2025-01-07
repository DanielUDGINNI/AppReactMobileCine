//Daniel Alberto Vazquez Ramirez 218747235 Programacion para Internet
import React, { Component, useState, useEffect } from 'react';
import Constants from 'expo-constants';
import {
  Text,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
  Picker,
  TouchableOpacity,
  FlatList,
  Dimensions,
  TouchableHighlight,
  Button,
  Input,
  AppRegistry,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../consts/colors';
import { SecondaryButton } from '../components/Button';
import { PrimaryButton } from '../components/Button';
import { ThirdButton } from '../components/Button';
import QRCode from 'react-native-qrcode-svg';
import foods from '../../consts/foods';
import axios from 'axios';

const CodigoG = ({ navigation }) => {
  var randomChars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  const limpiarCarrito = async () => {
    await axios.get(
      'limpiaCarro.php'
    );
    console.log(result);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        /// console.log(xhttp.responseText())
      }
    };
    xhttp.open(
      'GET',
      'insertarcompra2.php?&codigo=' +
        result,
      true
    );
    xhttp.send();

    navigation.navigate('BoardScreen');
  };

  var result = '';
  for (var i = 0; i < 10; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }

  let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';

  var NumberHolder: 1;

  var RandomNumber = Math.floor(Math.random() * 100) + 1;

  NumberHolder = RandomNumber;

  return (
    <View style={style.containerCarrito}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Atras</Text>
      </View>

      <View
        style={{ marginTop: 30, flexDirection: 'row', paddingHorizontal: 20 }}>
        <View style={style.inputContainer2}>
          <Text style={{ fontSize: 27, fontWeight: 'bold' }}>
            {' '}
            Codigo de compra
          </Text>
        </View>
      </View>

      <View
        style={{ marginTop: 30, flexDirection: 'row', paddingHorizontal: 20 }}>
        <View style={style.inputContainer}>
          <Text style={{ fontSize: 27, fontWeight: 'bold' }}>{result}</Text>
        </View>
      </View>

      <View
        style={{
          marginTop: 30,
          marginLeft: 90,
          flexDirection: 'row',
          paddingHorizontal: 20,
          alignContent: 'center',
        }}>
        <View style={style.inputContainer3}>
          <QRCode
            value={result}
            logo={{ uri: base64Logo }}
            logoSize={20}
            logoBackgroundColor="transparent"
          />
        </View>
      </View>
      <View
        style={{
          marginTop: 30,
          flexDirection: 'row',
          paddingHorizontal: 20,
          alignContent: 'center',
        }}>
        <View style={style.inputContainer2}>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
            Toma ScreenShot a esta pantalla y presentalo en la dulceria del cine
            cuando vayas a ve tu pelicula
          </Text>
        </View>
      </View>
      <PrimaryButton onPress={() => limpiarCarrito()} title="Aceptar" />
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
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputContainer2: {
    flex: 1,
    height: 150,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputContainer3: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default CodigoG;
