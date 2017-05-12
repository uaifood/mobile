'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = ReactNative;

class TabBar extends React.Component {
  static title = '<TabBarIOS>';
  static description = 'Tab-based navigation.';
  static displayName = 'TabBar';

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
          icon={require('../../resources/images/list.png')}
          selectedIcon={require('../../resources/images/list_hover.png')}
          selected={this.state.selectedTab === 'orderTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'orderTab',
            });
          }}>
          {this._renderContent('#FFF', 'Pedidos')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="ADICIONAR"
          icon={require('../../resources/images/add.png')}
          selectedIcon={require('../../resources/images/add_hover.png')}
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
          icon={require('../../resources/images/bell.png')}
          selectedIcon={require('../../resources/images/bell_hover.png')}
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
          icon={require('../../resources/images/user.png')}
          selectedIcon={require('../../resources/images/user_hover.png')}
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
