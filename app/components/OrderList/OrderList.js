/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  ListView,
  TouchableHighlight
} from 'react-native';
import OrderRow from '../OrderRow/OrderRow';
import LoadingList from '../LoadingList/LoadingList';
import {OrderListStyle} from './OrderList.style';

export default class OrderList extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    console.log(props.navigator);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows([]),
      isLoading: true
    }

    fetch('https://uaifood-api.herokuapp.com/0.1/orders')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseData)
        })
      })
  }
  render() {
    const { navigate } = this.props.navigation;
    if (this.state.isLoading) {
      return (
        <View style={OrderListStyle.container}>
          <LoadingList />
        </View>
      )
    } else {
      return (
        <View style={OrderListStyle.container}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(order) =>
               <TouchableHighlight onPress={() => {
                 navigate('OrderDetails', { order: order })
               }}>
                <View>
                  <OrderRow order={order} />
                </View>
               </TouchableHighlight>
            }
          />
        </View>
      );
    }
  }
}
