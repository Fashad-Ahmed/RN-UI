import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Main from '../screens/Main';
import Home from '../screens/Scooter/Home';
import Detail from '../screens/Scooter/Detail';
import Login from '../screens/Login/Login';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
