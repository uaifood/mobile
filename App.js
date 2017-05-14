import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import OrderDetails from './app/components/OrderDetails/OrderDetails';
import TabBar from './app/components/TabBar/TabBar';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'uaiFood (BH)',
    headerTitleStyle: {
      color: '#fff',
    },
    headerStyle: {
      backgroundColor: '#ec635f'
    },
  };

  render() {
    const { navigation } = this.props;
    return (
      <TabBar navigation={ navigation }/>
    );
  }
}

const uaifood = StackNavigator({
  Home: { screen: HomeScreen },
  OrderDetails: { screen: OrderDetails }
});

AppRegistry.registerComponent('uaifood', () => uaifood);
