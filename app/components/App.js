import React, { Component } from 'react';
import TabView from './TabView/TabView';

class App extends Component {
	constructor(props) {
		super(props);

		this.onPress = this.onPress.bind(this);
	}

	onPress(tab) {
		this.setState({ selectedTab: tab });
	}

	render() {
		return (
        <TabView/>
		);
	}
}

export default App;
