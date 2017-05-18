import React, { PureComponent } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import OrderList from '../OrderList/OrderList';
import { TabViewStyle } from './TabView.style';

const FirstRoute = () => <OrderList />;
const SecondRoute = () => <View style={[ TabViewStyle.container, { backgroundColor: '#673ab7' } ]} />;
const ThirdRoute = () => <View style={[ TabViewStyle.container, { backgroundColor: '#673ab7' } ]} />;
const FourthRoute = () => <View style={[ TabViewStyle.container, { backgroundColor: '#673ab7' } ]} />;
const sceneMap = SceneMap({
	1: FirstRoute,
	2: SecondRoute,
	3: ThirdRoute,
	4: FourthRoute
});

export default class TabView extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			index: 0,
			routes: [
        { key: '1', title: 'PEDIDOS', icon: '../../resources/images/list_hover.png' },
        { key: '2', title: 'ADICIONAR', icon: '../../resources/images/add_hover.png'  },
        { key: '3', title: 'RESTAURANTES', icon: '../../resources/images/bell_hover.png'  },
        { key: '4', title: 'PERFIL', icon: '../../resources/images/user_hover.png'  }
			]
		};
		this.handleChangeTab = this.handleChangeTab.bind(this);
		this.renderFooter = this.renderFooter.bind(this);
	}

	handleChangeTab(index) {
		this.setState({ index });
	}

	renderIcon(route) {
		console.log(route.icon);
		return <Image style={TabViewStyle.icons} source={require('../../resources/images/add_hover.png')}/>;
	}

	renderFooter(props) {
		return (
      <TabBar
	{...props}
	renderIcon={this.renderIcon}
	renderBadge={this.renderBadge}
	indicatorStyle={TabViewStyle.indicator}
	style={TabViewStyle.tabbar}
	tabStyle={TabViewStyle.tab}
	labelStyle={TabViewStyle.label}
      />
		);
	}

	render() {
		return (
      <TabViewAnimated
	style={TabViewStyle.container}
	navigationState={this.state}
	renderScene={sceneMap}
	renderFooter={this.renderFooter}
	onRequestChangeTab={this.handleChangeTab}
      />
		);
	}
}
