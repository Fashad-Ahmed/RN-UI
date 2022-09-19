import {View, Text, Button, Animated} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import reduxStore from '../../redux/store/index';

const Main = () => {
  const navigation = useNavigation();
  const {store, persistor} = reduxStore();

  console.log(store.getState());

  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: 'space-evenly',
        marginHorizontal: 20,
        backgroundColor: 'lightblue',
        overflow: 'scroll',
      }}>
      <Button
        title="Scooter UI"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <Button
        title="Login UI"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
      <Button
        title="Integrate"
        onPress={() => {
          navigation.navigate('InputScreen');
        }}
      />
    </Animated.View>
  );
};

export default Main;
