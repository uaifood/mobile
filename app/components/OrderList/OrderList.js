import React, { Component } from 'react';
import {
  View,
  ListView,
  TouchableWithoutFeedback,
	RefreshControl
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import PropTypes from 'prop-types';
import OrderRow from '../OrderRow/OrderRow';
import LoadingList from '../LoadingList/LoadingList';
import { OrderListStyle } from './OrderList.style';
import OrderDetails from '../OrderDetails/OrderDetails.js';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class OrderList extends Component {
	static navigationOptions = {
		title: 'uaiFood (BH)',
		headerTitleStyle: {
			color: '#fff',
			alignSelf: 'center'
		},
		headerStyle: {
			backgroundColor: '#ec635f'
		}
	};

	constructor(props) {
		super(props);

		this.state = {
			dataSource: ds.cloneWithRows([]),
			isLoading: true,
			refreshing: false
		};
	}

	componentWillMount() {
		fetch('https://uaifood-api.herokuapp.com/0.1/orders')
		.then((response) => response.json())
		.then((responseData) => {
			this.setState({
				isLoading: false,
				dataSource: ds.cloneWithRows(responseData)
			});
		});
	}

	render() {
		const { navigate } = this.props.navigation;
		if (this.state.isLoading) {
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
	dataSource={this.state.dataSource}
	renderRow={(order) =>
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
			refreshing={this.state.refreshing}
			onRefresh={this.componentWillMount()}
		/>
	}
          />
        </View>
			);
		}
	}
}

OrderList.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func
	})
};

const AppNavigation = StackNavigator({
	OrderList: { screen: OrderList },
	OrderDetails: { screen: OrderDetails }
});

export default AppNavigation;
