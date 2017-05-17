import React, { PureComponent } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import OrderList from './OrderList/OrderList';

const FirstRoute = () => <OrderList />;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;
const ThirdRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;
const FourthRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;
const sceneMap = SceneMap({
    '1': FirstRoute,
    '2': SecondRoute,
    '3': ThirdRoute,
    '4': FourthRoute,
  });

export default class TabViewExample extends PureComponent {
  constructor(props){
    super(props);

    this.state = {
      index: 0,
      routes: [
        { key: '1', title: 'PEDIDOS', icon: '../resources/images/list_hover.png' },
        { key: '2', title: 'ADICIONAR', icon: '../resources/images/add_hover.png'  },
        { key: '3', title: 'RESTAURANTES', icon: '../resources/images/bell_hover.png'  },
        { key: '4', title: 'PERFIL', icon: '../resources/images/user_hover.png'  }
      ]
    };
    this.handleChangeTab = this.handleChangeTab.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
  }

  handleChangeTab(index){
    this.setState({ index });
  }

  renderIcon() {
    return <Image style={styles.icons} source={require('../resources/images/add_hover.png')}/>;
  }

  renderFooter(props) {
    return (
      <TabBar
        {...props}
        renderIcon={this.renderIcon}
        renderBadge={this.renderBadge}
        indicatorStyle={styles.indicator}
        style={styles.tabbar}
        tabStyle={styles.tab}
        labelStyle={styles.label}
      />
    );
  }

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={sceneMap}
        renderFooter={this.renderFooter}
        onRequestChangeTab={this.handleChangeTab}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icons: {
    width: 24,
    height: 24
  },
  tabbar: {
    backgroundColor: 'white',
  },
  tab: {
    height: 49,
  },
  icon: {
    backgroundColor: 'transparent',
    color: '#E8655C',
  },
  indicator: {
    backgroundColor: '#ffeb3b',
  },
  label: {
    color: '#E8655C',
    fontSize: 9,
    fontWeight: '700',
  },
});
