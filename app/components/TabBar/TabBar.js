'use strict';

var React = require('react');
var ReactNative = require('react-native');
var Icons = require('../../Utils/Icons.js');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = ReactNative;

import OrderDetails from '../OrderDetails/OrderDetails';
import OrderList from '../OrderList/OrderList';

class TabBar extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    selectedTab: 'orderTab',
  };

  _renderContent = (color: string, pageText: string, num?: number) => {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
    );
  };

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="#999999"
        tintColor="#E8655C">
        <TabBarIOS.Item
          title="PEDIDOS"
          icon={{uri: Icons.listIcon, scale: 3}}
          selected={this.state.selectedTab === 'orderTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'orderTab',
            });
          }}>
          <OrderList navigation = {this.props.navigation}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="ADICIONAR"
          icon={{uri: Icons.addIcon, scale: 3}}
          selected={this.state.selectedTab === 'addTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'addTab',
            });
          }}>
          {this._renderContent('#783E33', 'Red Tab', this.state.notifCount)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="RESTAURANTES"
          icon={{uri: Icons.bellIcon, scale: 3}}
          selected={this.state.selectedTab === 'restaurantsTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'restaurantsTab',
            });
          }}>
          {this._renderContent('#21551C', 'Green Tab', this.state.presses)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="PERFIL"
          icon={{uri: Icons.userIcon, scale: 3}}
          selected={this.state.selectedTab === 'profileTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'profileTab',
            });
          }}>
          {this._renderContent('#21551C', 'Green Tab', this.state.presses)}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'yellow',
    margin: 50,
  },
});

module.exports = TabBar;
