import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class OrderRow extends Component {
  render() {
    const order = this.props.order;
    console.log('ORDER', order);
    return (
      <View style={styles.row}>
        <Image
          style={styles.thumbnail}
          source={{uri: order.restaurantId.image}}
        />
        <View style={styles.textContainer}>
          <Text numberOfLines={1} ellipsizeMode= 'tail' style={styles.owner}>{order.by} está pedindo</Text>
          <Text style={styles.restaurant}>{order.restaurantId.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    width: '100%',
  },
  thumbnail: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25
  },
  textContainer: {
    flex:1,
    alignItems:'flex-start',
    justifyContent:'center',
  },
  owner: {
    fontSize: 14,
    paddingTop: 5,
    paddingBottom: 5,
  },
  restaurant: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
