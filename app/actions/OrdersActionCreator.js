// Action Creator class is a helper class that group
// all action methods that can be triggered from our
// views (components) and dispatch and action type.
import Dispatcher from '../dispatcher/Dispatcher';
import { get } from '../utils/api/Requests';
import ActionTypes from '../utils/constants/ActionTypes';
import ApiEndpoints from '../utils/constants/ApiEndpoints';

function fetchingOrders() {
	return { type: ActionTypes.fetchOrders };
}

function ordersReceived(orders) {
	return { type: ActionTypes.ordersReceived, orders };
}

function fetchingServerError() {
	return { type: ActionTypes.fetchingServerError };
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
