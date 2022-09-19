import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import reduxStore from '../../../src/redux/store/index';
import {useSelector} from 'react-redux';

const ListScreen = ({navigation}) => {
  const test = useSelector(state => state);

  const renderItem = ({item}) => {
    return (
      <View>
        <Text style={styles.listButtonText}>
          {item.name} - {item.place}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <View>
        <FlatList
          data={test.objectReducer.userData}
          keyExtractor={item => item.name}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={{marginVertical: 10}} />}
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
