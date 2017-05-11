/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
import OrderRow from './app/components/OrderRow/OrderRow';
import OrderList from './app/components/OrderList/OrderList';

export default class uaifood extends Component {
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
};

AppRegistry.registerComponent('uaifood', () => uaifood);
