import 'react-native';
import { shallow } from 'enzyme';
import { View, ListView } from 'react-native';
import React from 'react';
import OrderList from './OrderList';
import Navigation from '../../test-utils/factories/Navigation.factory';
import Order from '../../test-utils/factories/Order.factory';
import LoadingList from '../loading-list/LoadingList';
import { getOrders } from '../../modules/OrdersModule';

jest.mock('../../modules/OrdersModule');

function renderOrderListComponent(orders, navigation, fetching) {
	return shallow(
		<OrderList
			orders={orders}
			navigation={Navigation}
			getOrders={getOrders}
			fetching={fetching}
		/>
	);
}

describe('Order list component', () => {
	test('renders a loading order list', () => {
		const orderList = renderOrderListComponent([], Navigation, true);
		expect(orderList.length).toBe(1);
		expect(orderList.find(View).length).toBe(1);
		expect(orderList.find(ListView).length).toBe(0);
		expect(orderList.find(LoadingList).length).toBe(1);
	});

	test('renders an order list with an order', () => {
		const orderList = renderOrderListComponent([ Order ], Navigation, false);
		expect(orderList.find(View).length).toBe(1);
		expect(orderList.find(ListView).length).toBe(1);
		expect(orderList.find(LoadingList).length).toBe(0);
	});
});
