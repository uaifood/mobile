import App from './app/components/App';
import { AppRegistry } from 'react-native';
import React, {Component} from 'react';

class IndexIos extends Component {
  static navigationOptions = {
    title: 'uaiFood (BH)',
    headerTitleStyle: {
      color: '#fff',
    },
    headerStyle: {
      backgroundColor: '#ec635f'
    },
  };

  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('uaifood', () => IndexIos);
