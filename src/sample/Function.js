import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Func = () => {
  const [value, setValue] = useState(0);

  const onCl = val => {
    setValue(val * 10);
    return value;
  };
  return (
    <View>
      <TouchableOpacity>
        <TextInput onChangeText={val => onCl(val)} />
        <Text>Function</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Func;
