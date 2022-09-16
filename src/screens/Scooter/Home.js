import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
// import {useNavigation} from '@react-navigation/native';
//fonts

const Home = ({navigation}) => {
  // const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={require('./1.png')} style={styles.img} />
        <Text style={styles.title} testID={'username'}>
          Max Scooter
        </Text>
        <Text style={styles.detail}>
          Nam gravida neque quis consectetur aliquam. Suspendisse sed
          ullamcorper orci, a dictum nunc. Curabitur lobortis felis nec
          efficitur dictum. Nullam pharetra in metus et semper. Sed ornare
          tincidunt enim. Sed est quam, laoreet in bibendum a, sodales sit amet
          enim. llamcorper orci, a dictum nunc.
        </Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            console.log('presss');
            // navigation.navigate('Detail');
          }}>
          <Text style={styles.txt}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  img: {
    // height: '50%',
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    color: '#FFF',
    fontSize: 45,
    marginTop: 20,
    alignSelf: 'center',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
  detail: {
    alignSelf: 'center',
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 20,
  },
  btn: {
    marginTop: 40,
    backgroundColor: 'red',
    alignSelf: 'center',
    width: '70%',
    borderRadius: 40,
  },
  txt: {
    alignSelf: 'center',
    color: '#ee',
    fontSize: 30,
    fontWeight: '400',
    color: '#FFF',
  },
});
