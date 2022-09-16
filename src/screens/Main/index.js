import {View, Text, Button, Animated} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const c = new Animated.Value(0);

const Main = () => {
  const navigation = useNavigation();

  // const color = c.interpolate({
  //   inputRange: [0, 200, 300],
  //   outputRange: ['black', 'pink', 'purple'],
  // });

  // useEffect(() => {
  //   Animated.timing(c, {
  //     toValue: 300,
  //     duration: 3000,
  //   }).start();
  // }, []);

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
