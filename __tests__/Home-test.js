import 'react-native';
import React from 'react';
import Home from '../src/screens/Scooter/Home';
import renderer from 'react-test-renderer';

test('Home snapShot', () => {
  const snap = renderer.create(<Home />).toJSON();

  expect(snap).toMatchSnapshot();
});
