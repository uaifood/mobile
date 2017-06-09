import OrdersStore from './OrdersStore';
import ActionTypes from '../utils/constants/ActionTypes';
import Order from '../test-utils/factories/Order.factory';

const orders = [ Order ];

describe('Orders store', () => {
	it('should be fetching orders', () => {
		const action = {
			type: ActionTypes.fetchingOrders
		};
		const state = OrdersStore.reduce([], action);
		expect(state).toEqual({ fetching: true });
	});

	it('should update store state', () => {
		const action = {
			type: ActionTypes.ordersReceived,
			orders
		};
		const state = OrdersStore.reduce([], action);
		expect(state).toEqual({ orders: orders, fetching: false });
		expect(state).not.toEqual({ orders: [], fetching: false });
	});

	it('should return the current state on error', () => {
		const action = {
			type: ActionTypes.fetchingServerError
		};
		const currentState = [ orders ];
		const state = OrdersStore.reduce(currentState, action);
		expect(state).toEqual(currentState);
		expect(state).not.toEqual([]);
	});

});
