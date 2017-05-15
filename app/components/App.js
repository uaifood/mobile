import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppRegistry, View, TabBarIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';
// import TabViewExample from './TabViewExample';
import OrderDetails from './OrderDetails/OrderDetails';
import OrderList from './OrderList/OrderList';
import Icons from '../Utils/Icons.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'orderTab'
    };
    this.onPress = this.onPress.bind(this);
    this.getView = this.getView.bind(this);
  }

  static navigationOptions = {
    title: 'uaiFood (BH)',
    headerTitleStyle: {
      color: '#fff',
    },
    headerStyle: {
      backgroundColor: '#ec635f'
    },
  };

  onPress(tab) {
    this.setState({selectedTab: tab});
  }

  getView(tab) {
    switch (tab) {
      case 'orderTab':
        return <OrderList/>
      case 'addTab':
        return <View style={{backgroundColor: 'red', flex: 2}}/>
      case 'restaurantsTab':
        return <View style={{backgroundColor: 'black', flex: 2}}/>
      case 'profileTab':
        return <View style={{backgroundColor: 'green', flex: 2}}/>
      default:
        return <View/>
    }
  }

  render() {
    const { navigation, tabs, icons } = this.props;
    return (
      this.props.device === 'android' ? (
        <TabViewExample/>
      ) : (
        <TabBarIOS
          unselectedTintColor="#999999"
          tintColor="#E8655C"
        >
          {Object.keys(tabs).map((tab, index) => {
            return (
              <TabBarIOS.Item
                key={`tab_bar-${index}`}
                title={tabs[tab]}
                icon={{uri: icons[tab], scale: 3}}
                selected={this.state.selectedTab === tab}
                onPress={() => this.onPress(tab)}
              >
                {this.getView(tab)}
              </TabBarIOS.Item>
            );
          })}
        </TabBarIOS>
      )
    );
  }
}

App.defaultProps = {
  tabs: {
    orderTab: 'PEDIDOS',
    addTab: 'ADICIONAR',
    restaurantsTab: 'RESTAURANTES',
    profileTab: 'PERFIL'
  },
  icons: {
    orderTab: Icons.listIcon,
    addTab: Icons.addIcon,
    restaurantsTab: Icons.bellIcon,
    profileTab: Icons.userIcon
  }
}

App.propTypes = {
  device: PropTypes.string.isRequired
}

export default App;
