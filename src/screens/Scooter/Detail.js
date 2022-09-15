import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';

const Detail = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* HEADER */}
        {/* BODY     */}
        <View style={styles.img}>
          <Image source={require('./2.png')} />
        </View>
        <View style={styles.cont3}>
          <Text style={styles.title}>Max Scooter</Text>
          <Text style={styles.subTitle}>Model S1 MT</Text>
          <View style={styles.cont2}>
            <Text
              style={{
                ...styles.title,
                flex: 2,
                marginTop: 0,
              }}>
              Colors
            </Text>
            <View style={styles.selected}>
              <View style={styles.c1} />
            </View>
          </View>
          <View style={styles.c2} />
          <View style={styles.c3} />
        </View>
        <Text style={styles.text}>
          Nam gravida neque quis consectetur aliquam. Suspendisse sed
          ullamcorper orci, a dictum nunc. Curabitur lobortis felis nec
          efficitur dictum. Nullam pharetra in metus et semper.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  img: {
    marginVertical: 30,
    // height: '0%',
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    color: '#FFF',
    fontSize: 25,
    marginTop: 30,
  },
  subTitle: {
    fontSize: 20,
    color: '#474747',
    marginTop: 10,
  },
  text: {
    fontSize: 10,
    paddingRight: 80,
    lineHeight: 25,
    color: 'grey',
  },
  cont1: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  c3: {
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: '529CCB',
  },
});
