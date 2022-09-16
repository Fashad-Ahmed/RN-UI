import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Func from '../src/sample/Function';

it('function and state test care', () => {
  let LoginData = renderer.create(<Func />).getInstance();
  // catch functions
  //   expect(LoginData.onCl(3)).toEqual(30);

  LoginData.onCl(3);
  expect(LoginData.state.value).toEqual(0);
});
