import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {saveUserData} from '../../redux/reducer/enterReducer';
import reduxStore from '../../../src/redux/store/index';
const InputScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');

  const {store, persistor} = reduxStore();

  // const dispatch = useDispatch();
  const {dispatch} = store;

  const handleSubmit = () => {
    if (!name.trim() || !place.trim()) {
      alert('Please Enter Fields');
      return;
    } else {
      dispatch(
        saveUserData({
          name,
          place,
        }),
      );
      setName('');
      setPlace('');
      navigation.navigate('ListScreen');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Name"
        autoCapitalize="none"
        autoCorrect={false}
        maxLength={6}
        style={styles.textInput}
        value={name}
        onChangeText={text => setName(text)}
      />

      <TextInput
        placeholder="Enter Place"
        autoCapitalize="none"
        autoCorrect={false}
        maxLength={6}
        value={place}
        onChangeText={text => setPlace(text)}
        style={styles.textInput}
      />

      <TouchableOpacity
        onPress={handleSubmit}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>ENTER</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 80,
  },
  textInput: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: 'pink',

    fontSize: 20,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
