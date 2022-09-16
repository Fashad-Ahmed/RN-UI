import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../src/screens/Scooter/Home';

let findElement = function (tree, element) {
  //   console.warn(tree.children);
  let result = undefined;
  for (node in tree.children) {
    if (tree.children[node].props.testID == element) {
      result = true;
    }
  }
  return result;
};

it('find element', () => {
  let tree = renderer.create(<Home />).toJSON();

  expect(findElement(tree, 'username'));
});
