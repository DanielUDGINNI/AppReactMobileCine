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
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../consts/colors';
import { SecondaryButton } from '../components/Button';
import { PrimaryButton } from '../components/Button';
import { ThirdButton } from '../components/Button';
import { Calendar } from 'react-native-calendario';
import CalendarPicker from 'react-native-calendar-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import foods from '../../consts/foods';
import axios from 'axios';

const DatosPago = ({ navigation }) => {
  const [textInputNumero, setTextInputNumero] = useState('');
  const [textInputCVV, setTextInputCVV] = useState('');
  const [textInputCorreo, setTextInputCorreo] = useState('');
  const [selectedValue, setSelectedValue] = useState('01');
  const [selectedValue2, setSelectedValue2] = useState('21');

  const avanzar = () => {
    if (
      !textInputNumero.trim() ||
      !textInputCVV.trim() ||
      !textInputCorreo.trim()
    ) {
      alert('Por favor ingrese todos los datos');
      return;
    } else {
      navigation.navigate('Proceso');
    }
  };

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
            Detalles de pago
          </Text>
        </View>
      </View>

      <View
        style={{ marginTop: 30, flexDirection: 'row', paddingHorizontal: 20 }}>
        <View style={style.inputContainer}>
          <Icon name="credit-card" size={28} />
          <TextInput
            style={{ flex: 1, fontSize: 16 }}
            placeholder="  Ingrese los 16 digitos de la tarjeta"
            keyboardType="numeric"
            maxLength={16}
            onChangeText={(value) => setTextInputNumero(value)}
          />
        </View>
      </View>

      <View
        style={{ marginTop: 30, flexDirection: 'row', paddingHorizontal: 20 }}>
        <View style={style.inputContainer}>
          <Icon name="cc-mastercard" size={28} />
          <TextInput
            style={{ flex: 1, fontSize: 16 }}
            placeholder="  Ingrese el CVV"
            keyboardType="numeric"
            secureTextEntry={true}
            maxLength={3}
            onChangeText={(value) => setTextInputCVV(value)}
          />
        </View>
      </View>

      <View
        style={{ marginTop: 30, flexDirection: 'row', paddingHorizontal: 20 }}>
        <View style={style.inputContainer}>
          <Text>Mes</Text>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="01" value="01" />
            <Picker.Item label="02" value="02" />
            <Picker.Item label="03" value="03" />
            <Picker.Item label="04" value="04" />
            <Picker.Item label="05" value="05" />
            <Picker.Item label="06" value="06" />
            <Picker.Item label="07" value="07" />
            <Picker.Item label="08" value="08" />
            <Picker.Item label="09" value="09" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="11" value="11" />
            <Picker.Item label="12" value="12" />
          </Picker>
          <Text>Anioo</Text>

          <Picker
            selectedValue={selectedValue2}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue2(itemValue)
            }>
            <Picker.Item label="21" value="21" />
            <Picker.Item label="22" value="22" />
            <Picker.Item label="23" value="23" />
            <Picker.Item label="24" value="24" />
            <Picker.Item label="25" value="25" />
            <Picker.Item label="26" value="26" />
            <Picker.Item label="27" value="27" />
            <Picker.Item label="28" value="28" />
            <Picker.Item label="29" value="29" />
          </Picker>
        </View>
      </View>

      <View
        style={{ marginTop: 30, flexDirection: 'row', paddingHorizontal: 20 }}>
        <View style={style.inputContainer}>
          <Icon name="envelope-o" size={28} />
          <TextInput
            style={{ flex: 1, fontSize: 16 }}
            placeholder=" Ingrese su correo electronico"
            onChangeText={(value) => setTextInputCorreo(value)}
          />
        </View>
      </View>

      <View
        style={{
          marginTop: 30,
          flexDirection: 'row',
          paddingHorizontal: 20,
          fontWeight: 'bold',
          fontSize: 18,
        }}></View>

      <PrimaryButton onPress={avanzar} title="Confirmar" />
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
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default DatosPago;
