import 'react-native';
import { shallow } from 'enzyme';
import React from 'react';
import OrderListContainer from './OrderListContainer';
import Navigation from '../test-utils/factories/Navigation.factory';

jest.mock('../modules/OrdersModule');

test('renders order list container', () => {
	const orderListContainer = shallow(<OrderListContainer navigation={Navigation} />);
	expect(orderListContainer.length).toBe(1);
});
