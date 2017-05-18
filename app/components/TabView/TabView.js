import React, { PureComponent } from 'react';
import { View, Image } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import OrderList from '../OrderList/OrderList';
import { TabViewStyle } from './TabView.style';
const Icons = [
	require('../../resources/images/list_hover.png'),
	require('../../resources/images/add_hover.png'),
	require('../../resources/images/bell_hover.png'),
	require('../../resources/images/user_hover.png')
];
const Grey = '#673ab7';

const FirstRoute = () => <OrderList />;
const SecondRoute = () => <View style={[ TabViewStyle.container, { backgroundColor: Grey } ]} />;
const ThirdRoute = () => <View style={[ TabViewStyle.container, { backgroundColor: Grey } ]} />;
const FourthRoute = () => <View style={[ TabViewStyle.container, { backgroundColor: Grey } ]} />;
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
        { key: '1', title: 'PEDIDOS', icon: Icons[0] },
        { key: '2', title: 'ADICIONAR', icon: Icons[1] },
        { key: '3', title: 'RESTAURANTES', icon: Icons[2] },
        { key: '4', title: 'PERFIL', icon: Icons[3] }
			]
		};
		this.handleChangeTab = this.handleChangeTab.bind(this);
		this.renderFooter = this.renderFooter.bind(this);
	}

	handleChangeTab(index) {
		this.setState({ index });
	}

	renderIcon({ route }) {
		return (<Image style={TabViewStyle.icons} source={route.icon}/>);
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
