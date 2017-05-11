import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class OrderDetails extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.order.by
  });
  render() {
    const { goBack } = this.props.navigation;

    const order = this.props.navigation.state.params.order;
    return (
      <View style={styles.row}>
        <Text>Detalhes do pedido</Text>
        <Image
          style={styles.thumbnail}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />
        <View>
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
  owner: {
    fontSize: 14,
    paddingTop: 5,
    paddingBottom: 5,
    width: '80%' //FIXME
  },
  restaurant: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
