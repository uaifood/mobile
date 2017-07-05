// TODO: Read a bit more about how to test async actions. =)
import 'react-native';
import OrdersStore, {
  FETCHING_ORDERS,
  ORDERS_RECEIVED,
  FETCHING_SERVER_ERROR
} from './OrdersModule';
import Order from '../test-utils/factories/Order.factory';

const orders = [ Order ];

describe('Orders store', () => {
	it('should be fetching orders', () => {
		const action = {
			type: FETCHING_ORDERS
		};
		const state = OrdersStore.reduce([], action);
		expect(state).toEqual({ fetching: true });
	});

	it('should update store state', () => {
		const action = {
			type: ORDERS_RECEIVED,
			orders
		};
		const state = OrdersStore.reduce([], action);
		expect(state).toEqual({ orders: orders, fetching: false });
		expect(state).not.toEqual({ orders: [], fetching: false });
	});

	it('should return the current state on error', () => {
		const action = {
			type: FETCHING_SERVER_ERROR
		};
		const currentState = [ orders ];
		const state = OrdersStore.reduce(currentState, action);
		expect(state).toEqual(currentState);
		expect(state).not.toEqual([]);
	});

});


describe('Orders actions', () => {
	test('get orders', () => {
	});

	test('refresh orders', () => {
	});
});
