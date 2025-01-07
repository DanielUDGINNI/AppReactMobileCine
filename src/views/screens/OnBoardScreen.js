//Daniel Alberto Vazquez Ramirez 218747235 Programacion para Internet
import * as React from 'react';
import Constants from 'expo-constants';
import { Text, StyleSheet, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../consts/colors';
import { PrimaryButton } from '../components/Button';

const OnBoardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ height: 600 }}>
        <Image
          style={{
            width: '100%',
            resizeMode: 'contain',
            top: 170,
          }}
          source={require('../../assets/onboard.png')}
        />
      </View>
      <View style={style.textContainer}>
        <View>
          <Text
            style={{
              fontSize: 28,
              fontWeight: 'bold',
              textAlign: 'center',
              height: 150,
            }}>
            Disfruta de tu pelicula comiendo unas deliciosas palomitas
          </Text>
          <Text
            style={{
              top: -20,
              fontSize: 18,
              textAlign: 'center',
              color: COLORS.grey,
            }}>
            Ahorrate el tiempo en fila!
          </Text>
        </View>
        <View style={style.indicatorContainer}>
          <View style={style.currentIndicator}></View>
          <View style={style.indicator}></View>
          <View style={style.currentIndicator}></View>
        </View>
        <PrimaryButton
          onPress={() => navigation.navigate('Home')}
          title="Comenzar"
        />
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
  indicatorContainer: {
    top: -100,
    height: 50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginHorizontal: 5,
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5,
  },
});

export default OnBoardScreen;
