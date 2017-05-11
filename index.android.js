/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import App from './app/app.js'
import {
  AppRegistry
} from 'react-native';

export default class uaifood extends Component {
  render() {
    return <App></App>
  }
}

AppRegistry.registerComponent('uaifood', () => uaifood);
