import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import OrderList from './OrderList/OrderList';
import { AppStyle } from './App.style';
import { Yellow, Purple, LightBlue } from '../utils/Colors.style';

const FirstRoute = () => <OrderList />;
const SecondRoute = () => <View style={[ AppStyle.container, { backgroundColor: Purple } ]} />;
const ThirdRoute = () => <View style={[ AppStyle.container, { backgroundColor: Yellow } ]} />;
const FourthRoute = () => <View style={[ AppStyle.container, { backgroundColor: LightBlue } ]} />;
const sceneMap = SceneMap({
	1: FirstRoute,
	2: SecondRoute,
	3: ThirdRoute,
	4: FourthRoute
});

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			index: 0
		};
		this.handleChangeTab = this.handleChangeTab.bind(this);
		this.renderFooter = this.renderFooter.bind(this);
	}

	handleChangeTab(index) {
		this.setState({ index });
	}

	renderIcon({ route }) {
		return (<Image style={AppStyle.icons} source={route.icon}/>);
	}

	renderFooter(props) {
		return (
			<TabBar
				renderIcon={this.renderIcon}
				renderBadge={this.renderBadge}
				indicatorStyle={AppStyle.indicator}
				style={AppStyle.tabbar}
				tabStyle={AppStyle.tab}
				labelStyle={AppStyle.label}
				{...props}
			/>
		);
	}

	render() {
		const navigationState = { ...this.state, ...this.props };
		return (
			<TabViewAnimated
				style={AppStyle.container}
				navigationState={navigationState}
				renderScene={sceneMap}
				renderFooter={this.renderFooter}
				onRequestChangeTab={this.handleChangeTab}
			/>
		);
	}
}

App.defaultProps = {
	routes: [
		{ key: '1', title: 'PEDIDOS', icon: require('../resources/images/list_hover.png') },
		{ key: '2', title: 'ADICIONAR', icon: require('../resources/images/add_hover.png') },
		{ key: '3', title: 'RESTAURANTES', icon: require('../resources/images/bell_hover.png') },
		{ key: '4', title: 'PERFIL', icon: require('../resources/images/user_hover.png') }
	]
};

export default App;
