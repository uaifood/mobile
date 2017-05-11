import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Navigator,
  TouchableHighlight
} from 'react-native';
import OrderRow from './components/OrderRow/OrderRow';
import OrderList from './components/OrderList/OrderList';

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const routes = [
      {title: 'List Scene', index: 0},
      {title: 'Detail Scene', index: 1},
    ];
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) => {
          if (route.index === 0) {
            return <OrderList routes={routes} navigator={navigator}  />
          } else {
            return <Text>Teste</Text>
          }
        }
        }
      />
    );
  }
}
