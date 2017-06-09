// This is our Store (reduce store).
// This is responsible only for keep our app state,
// receive a new state from an action/dispatcher,
// keep the state updated and emit an state change
// to our views.
// This is our single source of truth.
import { ReduceStore } from 'flux/utils';
import Dispatcher from '../dispatcher/Dispatcher';
import ActionTypes from '../utils/constants/ActionTypes';

class OrdersStore extends ReduceStore<Object> {
	constructor() {
		super(Dispatcher);
	}

	getInitialState(): Object {
		return { orders: [], fetching: false };
	}

	reduce(state: Object, action: Object): Object {
		switch (action.type) {
			case ActionTypes.fetchingOrders:
				return { ...state, fetching: true };

			case ActionTypes.ordersReceived:
				return { ...state, orders: action.orders, fetching: false };

			case ActionTypes.fetchingServerError:
				return state;

			default:
				return state;
		}
	}
}

export default new OrdersStore();
