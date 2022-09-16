import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Main from '../screens/Main';
import Home from '../screens/Scooter/Home';
import Detail from '../screens/Scooter/Detail';
import Login from '../screens/Login/Login';
import Typo from '../sample/Typo';

import InputScreen from '../screens/Integral/InputScreen';
import ListScreen from '../screens/Integral/ListScreen';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const screenOptionStyle = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Typo" component={Typo} />
        <Stack.Screen name="InputScreen" component={InputScreen} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
