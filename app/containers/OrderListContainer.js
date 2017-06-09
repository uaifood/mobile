// A container is a wrapper for our view.
// A container will receive the state changes
// from one or more stores and update a component
// with the new application state.
import OrderList from '../components/order-list/OrderList';
import { Container } from 'flux/utils';
import OrdersStore from '../stores/OrdersStore';
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import OrderDetails from '../components/order-details/OrderDetails';
import { getOrders } from '../actions/OrdersActionCreator';

class OrderListContainer extends Component {
	static navigationOptions = {
		title: 'uaiFood (BH)',
		headerTitleStyle: {
			color: '#fff',
			alignSelf: 'center'
		},
		headerStyle: {
			backgroundColor: '#ec635f'
		}
	}

	static getStores() {
		return [ OrdersStore ];
	}

	static calculateState() {
		return {
			...OrdersStore.getState(),
			getOrders
		};
	}

	render() {
		return (
			<OrderList {...this.state} {...this.props} />
		);
	}
}

const ComponentContainer = Container.create(OrderListContainer);

export { ComponentContainer };

export default StackNavigator({
	OrderList: { screen: ComponentContainer },
	OrderDetails: { screen: OrderDetails }
});
