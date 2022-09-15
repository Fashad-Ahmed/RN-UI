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
import React, {useState} from 'react';
import styles from './styles';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
  withSequence,
  withSpring,
} from 'react-native-reanimated';
import {ClipPath, Ellipse} from 'react-native-svg';
// import Svg, {Image} from 'react-native-svg';

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const {width, height} = Dimensions.get('window');

  const imagePosition = useSharedValue(1);
  const formButtonScale = useSharedValue(1);

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

  //   const imageTwoAnimatedStyle = useAnimatedStyle(() => {
  //     return {
  //       flex: 1,
  //       overflow: 'hidden',
  //       resizeMode: 'cover',
  //     };
  //   });
  const buttonAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0]);
    return {
      opacity: withTiming(imagePosition.value, {duration: 500}),
      transform: [
        {
          translateY: withTiming(interpolation, {duration: 1000}),
        },
      ],
    };
  });

  const closedButtonContainerStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360]);

    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, {duration: 800}),
      transform: [
        {
          rotate: withTiming(interpolation + 'deg', {duration: 1000}),
        },
      ],
    };
  });

  const formAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity:
        imagePosition.value === 0
          ? withDelay(400, withTiming(1, {duration: 800}))
          : withTiming(0, {duration: 300}),
    };
  });

  const formButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: formButtonScale.value}],
    };
  });

  const loginHandler = () => {
    imagePosition.value = 0;
    setIsRegistering(false);
  };

  const registerHandler = () => {
    imagePosition.value = 0;
    setIsRegistering(true);
  };

  const crossHandler = () => {
    imagePosition.value = 1;
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
        {/* <Svg height={height} width={width} viewBox="0 0 100 100"> */}
        <ClipPath id="clipPathId">
          <Ellipse cx={width / 2} rx={width} ry={height} />
        </ClipPath>
        {/* <Animated.View View style={StyleSheet.absoluteFill}> */}
        {/* imageTwoAnimatedStyle */}
        <Image
          source={require('../../assets/login-background.jpg')}
          style={{
            height: height,
            width: width,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
        />
        {/* </Animated.View> */}
        {/* </Svg> */}
        <Animated.View
          style={[styles.closedButtonContainer, closedButtonContainerStyle]}>
          <TouchableOpacity onPress={crossHandler}>
            <Text
              style={{
                textAlign: 'center',
              }}>
              X
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>

      <View style={styles.bottomContainer}>
        <Animated.View style={buttonAnimatedStyle}>
          <TouchableOpacity style={styles.button} onPress={loginHandler}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={buttonAnimatedStyle}>
          <TouchableOpacity style={styles.button} onPress={registerHandler}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>

      <Animated.View style={[styles.formContainer, formAnimatedStyle]}>
        {isRegistering && (
          <TextInput
            placeholder="Name"
            placeholderTextColor="black"
            style={styles.textInput}
          />
        )}
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
        <Animated.View style={[styles.formButton, formButtonAnimatedStyle]}>
          <TouchableOpacity
            onPress={() => {
              formButtonScale.value = withSequence(
                withSpring(1.5),
                withSpring(1),
              );
            }}>
            <Text style={styles.buttonText}>
              {isRegistering ? 'REGISTER' : 'LOGIN'}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default Login;
