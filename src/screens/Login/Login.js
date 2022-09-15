import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {ClipPath, Ellipse} from 'react-native-svg';
// import Svg, {Image} from 'react-native-svg';

const Login = () => {
  const {width, height} = Dimensions.get('window');

  const imagePosition = useSharedValue(1);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(
      imagePosition.value,
      [0, 1],
      [-height / 2, 0],
    );
    return {
      transform: [
        {
          translateY: withTiming(interpolation, {duration: 1000}),
        },
      ],
    };
  });

  const loginHandler = () => {
    imagePosition.value = 0;
  };

  const crossHandler = () => {
    console.log('ffgf');
    imagePosition.value = 1;
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
        {/* <Svg height={height} width={width}> */}
        <ClipPath id="clipPathId">
          <Ellipse cx={width / 2} rx={width} ry={height} />
        </ClipPath>
        <Image
          source={require('../../assets/login-background.jpg')}
          style={{
            height: height,
            width: width,
          }}
        />
        {/* </Svg> */}
        <View style={styles.closedButtonContainer}>
          <TouchableOpacity onPress={crossHandler}>
            <Text
              style={{
                textAlign: 'center',
              }}>
              X
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={loginHandler}>
          <Text style={styles.buttonText}>LOG IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={loginHandler}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.formContainer}>
        <TextInput
          placeholder="Name"
          placeholderTextColor="black"
          style={styles.textInput}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="black"
          style={styles.textInput}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="black"
          style={styles.textInput}
        />

        <TouchableOpacity style={styles.formButton}>
          <Text style={styles.buttonText}>LOG IN</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default Login;
