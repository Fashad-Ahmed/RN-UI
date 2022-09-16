import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import 'isomorphic-fetch';
import Users from '../src/sample/User';

it('Api test case without Mock function', async function () {
  const response = await Users.all();
  response.movies[2].title === 'The Matrix'
    ? console.log(response.movies[2].title)
    : console.log('not found');
  //   expect(response.Id).toBe(1);

  expect(response.movies[2].title).toEqual('The Matrix');
});
