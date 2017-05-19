import 'react-native';
import { shallow } from 'enzyme';
import { View, Image } from 'react-native';
import React from 'react';
import OrderRow from './OrderRow';
import Order from '../../test_utils/factories/Order.factory';

test('renders a collection of grey Views', () => {
	const orderDetails = shallow(<OrderRow order={Order} />);
	expect(orderDetails.length).toBe(1);
	expect(orderDetails.find(View).length).toBe(2);
	expect(orderDetails.find(Image).length).toBe(1);
});
