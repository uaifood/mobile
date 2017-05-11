import 'react-native';
import React from 'react';
import LoadingList from '../../../app/components/LoadingList/LoadingList';

import renderer from 'react-test-renderer';

test('renders a list of orders', () => {
  const loadingList = renderer.create(
    <LoadingList />
  );
  expect(loadingList).toBeDefined();
});
