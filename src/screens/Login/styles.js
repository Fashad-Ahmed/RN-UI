import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: 'rgba(123,104,238,0.8)',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 66,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#FFF',
  },
  buttonText: {
    fontSize: 16.5,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 0.5,
  },
  bottomContainer: {
    justifyContent: 'center',
    height: height / 3,
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
    paddingLeft: 10,
  },
  formButton: {
    backgroundColor: 'rgba(123,104,238,0.8)',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 66,
    marginHorizontal: 20,
    // marginT: 0,
    // marginVertical: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  formContainer: {
    marginTop: 400,
    // marginBottom: 10,
    ...StyleSheet.absoluteFill,
    zIndex: -1,
    justifyContent: 'center',
  },
  closedButtonContainer: {
    top: -20,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignSelf: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 1,
    backgroundColor: 'white',
    borderRadius: 20,
  },
});

export default styles;
