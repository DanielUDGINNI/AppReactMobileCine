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

const Payment = ({ navigation }) => {
  setTimeout(() => {
    console.log('3 sec.');
    navigation.navigate('Codigo');
  }, 4000);

  return (
    <View style={style.container}>
      <Image
        style={{ width: 700, height: 700 }}
        source={{
          uri: 'https://cdn.dribbble.com/users/447957/screenshots/6899626/payment-animation.gif',
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});

export default Payment;
