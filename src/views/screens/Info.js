//Daniel Alberto Vazquez Ramirez 218747235 Programacion para Internet
import * as React from 'react';
import Constants from 'expo-constants';
import { Text, StyleSheet, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../consts/colors';
import { PrimaryButton } from '../components/Button';

const Information = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ height: 400 }}>
        <Image
          style={{
            width: '100%',
            resizeMode: 'contain',
            top: -100,
          }}
          source={require('../../assets/cineout.jpg')}
        />
      </View>

      <View style={style.textContainer}>
        <View>
          <Text
            style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center' }}>
            Cinepolis Plaza Rio Nilo
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 18,
              textAlign: 'center',
              color: COLORS.grey,
            }}>
            Av Río Nilo 7377, Lomas de La Soledad, 45403 Guadalajara, Jal.
          </Text>
          <Text
            style={{
              marginTop: 26,
              fontSize: 18,
              textAlign: 'center',
              color: COLORS.grey,
            }}>
            Cansado de hacer largas filas para comprar tus deliciosos alimentos
            para ver tu pelicula? Dile adiós a las filas,pre ordena y compra tus
            productos desde casa, antes de tu función y recogelas al momento que
            vayas a ver tu pelicula.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
    top: -150,
  },
});

export default Information;
