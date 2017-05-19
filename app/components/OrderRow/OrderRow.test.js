import 'react-native';
import { shallow } from 'enzyme';
import { View, Image } from 'react-native';
import React from 'react';
import OrderRow from './OrderRow';
import Order from '../../test_utils/factories/Order.factory';

test('renders an order row component', () => {
	const orderRow = shallow(<OrderRow order={Order} />);
	expect(orderRow.length).toBe(1);
	expect(orderRow.find(View).length).toBe(2);
	expect(orderRow.find(Image).length).toBe(1);
});
