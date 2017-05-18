import App from './app/components/App';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

class IndexIos extends Component {
	render() {
		return (
      <App device={'ios'}/>
		);
	}
}

AppRegistry.registerComponent('uaifood', () => IndexIos);
