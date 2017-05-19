import 'react-native';
import { shallow } from 'enzyme';
import { View, Image } from 'react-native';
import React from 'react';
import OrderDetails from './OrderDetails';
import Navigation from '../../test_utils/factories/Navigation.factory';

test('renders an order details component', () => {
	const orderDetails = shallow(<OrderDetails navigation={Navigation} />);
	expect(orderDetails.length).toBe(1);
	expect(orderDetails.find(View).length).toBe(2);
	expect(orderDetails.find(Image).length).toBe(1);
});
