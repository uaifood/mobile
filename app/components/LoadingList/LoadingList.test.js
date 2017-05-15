import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { ListView } from 'react-native';
import LoadingList from './LoadingList';

import renderer from 'react-test-renderer';

test('renders a list of orders', () => {
  const loadingList = shallow(<LoadingList />)
  expect(loadingList.length).toBe(1)
  expect(loadingList.find(ListView).length).toBe(1)
});
