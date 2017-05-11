import 'react-native';
import React from 'react';
import LoadingOrderRow from '../../../app/components/LoadingOrderRow/LoadingOrderRow';

import renderer from 'react-test-renderer';

test('renders a loading order row', () => {
  const loadingOrderRow = renderer.create(
    <LoadingOrderRow />
  );
  expect(loadingOrderRow).toBeDefined();
});
