import React, { Component } from 'react';
import {
  View,
  ListView,
  TouchableWithoutFeedback,
	RefreshControl
} from 'react-native';

import PropTypes from 'prop-types';
import OrderRow from '../order-row/OrderRow';
import LoadingList from '../loading-list/LoadingList';
import { OrderListStyle } from './OrderList.style';
import _ from 'underscore';

class OrderList extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.getOrders();
	}

	createDataSource() {
		return new ListView
			.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
			.cloneWithRows(this.props.orders);
	}

	render() {
		const { navigate } = this.props.navigation;
		const dataSource = this.createDataSource();

		if (this.props.fetching && _.isEmpty(this.props.orders)) {
			return (
				<View style={OrderListStyle.container}>
					<LoadingList />
				</View>
			);
		} else {
			return (
				<View style={OrderListStyle.container}>
					<ListView
						contentInset={{ bottom:49 }}
						automaticallyAdjustContentInsets={false}
						dataSource={dataSource}
						renderRow={order =>
							(<TouchableWithoutFeedback onPress={() => {
								navigate('OrderDetails', { order: order });
							}}
								>
								<View>
									<OrderRow order={order} />
								</View>
							</TouchableWithoutFeedback>)
						}
						refreshControl={
							<RefreshControl
								refreshing={this.props.fetching}
								onRefresh={this.props.getOrders}
							/>
						}
						enableEmptySections
					/>
				</View>
			);
		}
	}
}

OrderList.propTypes = {
	fetching: PropTypes.bool,
	getOrders: PropTypes.func,
	navigation: PropTypes.shape({
		navigate: PropTypes.func
	}),
	orders: PropTypes.arrayOf(PropTypes.shape({}))
};

export default OrderList;
