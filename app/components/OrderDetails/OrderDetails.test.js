import 'react-native';
import { shallow } from 'enzyme';
import { View } from 'react-native';
import React from 'react';
import OrderDetails from './OrderDetails';
import Navigation from '../../test_utils/factories/Navigation.factory';

test('renders a collection of grey Views', () => {
	const orderDetails = shallow(<OrderDetails navigation={Navigation} />);
	expect(orderDetails.length).toBe(1);
	expect(orderDetails.find(View).length).toBe(2);
});
