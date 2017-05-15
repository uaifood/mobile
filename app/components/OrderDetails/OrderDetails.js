import React, { Component } from 'react';
import {
  Text,
  Image,
  View
} from 'react-native';
import {OrderDetailsStyle} from './OrderDetails.style';

export default class OrderDetails extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.order.by
  });
  render() {
    const { goBack } = this.props.navigation;

    const { order } = this.props.navigation.state.params;
    return (
      <View style={OrderDetailsStyle.row}>
        <Text>Detalhes do pedido</Text>
        <Image
          style={OrderDetailsStyle.thumbnail}
          source={{uri: order.restaurantId.image}}
        />
        <View>
          <Text numberOfLines={1} ellipsizeMode= 'tail' style={OrderDetailsStyle.owner}>{order.by} está pedindo</Text>
          <Text style={OrderDetailsStyle.restaurant}>{order.restaurantId.name}</Text>
        </View>
      </View>
    );
  }
}
