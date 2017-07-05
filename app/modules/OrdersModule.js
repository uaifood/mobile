import { ReduceStore } from 'flux/utils';
import Dispatcher, { dispatchAction } from '../dispatcher/Dispatcher';
import { get } from '../utils/api/Requests';
import ApiEndpoints from '../utils/constants/ApiEndpoints';

export const FETCHING_ORDERS = 'orders/fetchingOrders';
export const ORDERS_RECEIVED = 'orders/ordersReceived';
export const FETCHING_SERVER_ERROR = 'orders/fetchingServerError';

export function getOrders() {
	dispatchAction(FETCHING_ORDERS);

	get(ApiEndpoints.orders)
	.then(orders => {
		dispatchAction(ORDERS_RECEIVED, { orders });
	})
	.catch(() => dispatchAction(FETCHING_SERVER_ERROR));
}

class OrdersStore extends ReduceStore {
	constructor() {
		super(Dispatcher);
	}

	getInitialState() {
		return { orders: [], fetching: false };
	}

	reduce(state, action) {
		switch (action.type) {
			case FETCHING_ORDERS:
				return { ...state, fetching: true };

			case ORDERS_RECEIVED:
				return { ...state, orders: action.orders, fetching: false };

			case FETCHING_SERVER_ERROR:
				return state;

			default:
				return state;
		}
	}
}

export default new OrdersStore();
