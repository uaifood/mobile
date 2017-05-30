import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import OrderList from './OrderList/OrderList';
import { AppStyle } from './App.style';
import { Yellow, Purple } from '../utils/Colors.style';

const FirstRoute = () => <OrderList />;
const SecondRoute = () => <View style={[ AppStyle.container, { backgroundColor: Purple } ]} />;
const ThirdRoute = () => <View style={[ AppStyle.container, { backgroundColor: Yellow } ]} />;
const sceneMap = SceneMap({
	1: FirstRoute,
	2: SecondRoute,
	3: ThirdRoute
});

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			index: 0
		};
		this.handleChangeTab = this.handleChangeTab.bind(this);
		this.renderFooter = this.renderFooter.bind(this);
		this.renderIcon = this.renderIcon.bind(this);
	}

	handleChangeTab(index) {
		this.setState({ index });
	}

	renderIcon({ route, index }) {
		let icon = (index === this.state.index) ? route.selectedIcon : route.icon;
		let style = (index === 1) ? AppStyle.iconPlus : AppStyle.icons;
		return (<Image style={style} source={icon}/>);
	}

	renderFooter(props) {
		return (
			<TabBar
				renderIcon={this.renderIcon}
				indicatorStyle={AppStyle.indicator}
				style={AppStyle.tabbar}
				tabStyle={AppStyle.tab}
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
				swipeEnabled={false}
				animationEnabled={false}
			/>
		);
	}
}

App.defaultProps = {
	routes: [
		{
			key: '1',
			icon: require('../resources/images/list_hover.png'),
			selectedIcon: require('../resources/images/list.png')
		},
		{
			key: '2',
			icon: require('../resources/images/add.png'),
			selectedIcon: require('../resources/images/add.png')
		},
		{
			key: '3',
			icon: require('../resources/images/user_hover.png'),
			selectedIcon: require('../resources/images/user.png')
		}
	]
};

export default App;
