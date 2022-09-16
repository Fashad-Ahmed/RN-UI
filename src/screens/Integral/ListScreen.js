import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import reduxStore from '../../../src/redux/store/index';
import {useSelector} from 'react-redux';

const ListScreen = ({navigation}) => {
  const test = useSelector(state => state);
  const {store, persistor} = reduxStore();

  const datum = store.getState();

  console.log('state', test);

  const renderItem = ({item}) => {
    return (
      <View>
        <Text style={styles.listButtonText}>{item.name}</Text>
      </View>
    );
  };
  return (
    <View>
      <View>
        <FlatList
          data={datum}
          keyExtractor={item => item.name}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={{marginBottom: 10}} />}
        />
      </View>
      <TouchableOpacity
        style={styles.appButtonContainer}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={styles.appButtonText}>GO BACK</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
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
  listButtonText: {
    marginHorizontal: 30,
    fontSize: 20,

    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
