//Daniel Alberto Vazquez Ramirez 218747235 Programacion para Internet
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import COLORS from './src/consts/colors';
import DetailsScreen from './src/views/screens/DetailsScreen';
import BottomNavigator from './src/views/navigation/BottomNavigator';
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import DatosPago from './src/views/screens/Pago';
import CodigoG from './src/views/screens/codigoG';
import Payment from './src/views/screens/Payment';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="Pagar" component={DatosPago} />
        <Stack.Screen name="Proceso" component={Payment} />
        <Stack.Screen name="Codigo" component={CodigoG} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
