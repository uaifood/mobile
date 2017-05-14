/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { AppRegistry } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import OrderDetails from './app/components/OrderDetails/OrderDetails.js';
import OrderList from './app/components/OrderList/OrderList.js';

const uaifood = StackNavigator({
	OrderList: { screen: OrderList },
	OrderDetails: { screen: OrderDetails }
});

AppRegistry.registerComponent('uaifood', () => uaifood);
