import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Main from '../src/screens/Main/index';

it('Test cases file', () => {
  let main = renderer.create(<Main />).getInstance();
});
