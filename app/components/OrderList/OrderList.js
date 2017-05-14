import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  ListView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
// import { StackNavigator } from 'react-navigation';

import PropTypes from 'prop-types';
import OrderRow from '../OrderRow/OrderRow';
import LoadingList from '../LoadingList/LoadingList';
import { OrderListStyle } from './OrderList.style';
import TabBar from '../TabBar/TabBar';
import OrderDetails from '../OrderDetails/OrderDetails.js';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class OrderList extends Component {
	static navigationOptions = {
		header: null
	};
	constructor(props) {
		super(props);

		this.state = {
			dataSource: ds.cloneWithRows([]),
			isLoading: true
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
            contentInset={{bottom:49}}
            automaticallyAdjustContentInsets={false}
            dataSource={this.state.dataSource}
            renderRow={(order) =>
               <TouchableOpacity onPress={() => {
                 navigate('OrderDetails', { order: order })
               }}>
                <View>
                  <OrderRow order={order} />
                </View>
               </TouchableOpacity>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 64,
    backgroundColor: '#fa8072'
  },
  bar: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f0ffff',
    textAlign: 'center',
    margin: 30,
  },
  name: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  owner: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 20
  },
  loading: {
    margin: 50
  }
});

AppRegistry.registerComponent('OrderList', () => OrderList);
