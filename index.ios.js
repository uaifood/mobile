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
  ListView
} from 'react-native';
import OrderRow from './app/components/OrderRow/OrderRow';

export default class uaifood extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows([]),
      isLoading: true
    }

    fetch('https://api.myjson.com/bins/7qj6n')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseData)
        })
      })
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Text style={styles.loading}>Carregando...</Text>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(order) => <OrderRow order={order} />}
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

AppRegistry.registerComponent('uaifood', () => uaifood);
