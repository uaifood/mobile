import 'react-native';
import { shallow } from 'enzyme';
import { View } from 'react-native';
import React from 'react';
import LoadingOrderRow from './LoadingOrderRow';

import renderer from 'react-test-renderer';

test('renders a collection of grey Views', () => {
  const loadingOrderRow = shallow(<LoadingOrderRow />)
  expect(loadingOrderRow.length).toBe(1)
  expect(loadingOrderRow.find(View).length).toBe(6)
});
