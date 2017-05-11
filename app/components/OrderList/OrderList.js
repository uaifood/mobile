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
  TouchableHighlight
} from 'react-native';
import OrderRow from '../OrderRow/OrderRow';
import LoadingList from '../LoadingList/LoadingList';

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
        <View style={styles.container}>
          <LoadingList />
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  header: {
    width: '100%',
    height: 65,
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
