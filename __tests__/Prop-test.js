// import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Typo from '../src/sample/Typo';
import {configure, shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

it('Testing props using Enzyme', () => {
  const wrapper = shallow(<Typo name="typo" />).props();
  console.log(wrapper.children.props.children);

  expect(wrapper.children.props.children).toEqual('typo');
});
