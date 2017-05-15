import React, { Component } from 'react';
import {
  View
} from 'react-native';
import {LoadingOrderRowStyle} from './LoadingOrderRow.style';

export default class LoadingOrderRow extends Component {
  render() {
    return (
      <View style={LoadingOrderRowStyle.row}>
        <View style={LoadingOrderRowStyle.greyCircle}>

        </View>
        <View>
              <View style={LoadingOrderRowStyle.greyLine}></View>
              <View style={LoadingOrderRowStyle.greyLine}></View>
              <View style={LoadingOrderRowStyle.greyLine}></View>
        </View>
      </View>
    );
  }
}
