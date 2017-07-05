import { ReduceStore } from 'flux/utils';
import Dispatcher from '../dispatcher/Dispatcher';
import { get } from '../utils/api/Requests';
import ApiEndpoints from '../utils/constants/ApiEndpoints';

export const FETCH_ORDERS = 'orders/fetchOrders';
export const ORDERS_RECEIVED = 'orders/ordersReceived';
export const FETCHING_SERVER_ERROR = 'orders/fetchingServerError';

function fetchingOrders() {
	return { type: FETCH_ORDERS };
}

function ordersReceived(orders) {
	return { type: ORDERS_RECEIVED, orders };
}

function fetchingServerError() {
	return { type: FETCHING_SERVER_ERROR };
}

export function getOrders() {
	Dispatcher.dispatch(fetchingOrders());

	get(ApiEndpoints.orders)
	.then((response) => response.json())
	.then((orders) => {
		Dispatcher.dispatch(ordersReceived(orders));
	})
	.catch(() => Dispatcher.dispatch(fetchingServerError()));
}

class OrdersStore extends ReduceStore<Object> {
	constructor() {
		super(Dispatcher);
	}

	getInitialState(): Object {
		return { orders: [], fetching: false };
	}

	reduce(state: Object, action: Object): Object {
		switch (action.type) {
			case FETCH_ORDERS:
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
