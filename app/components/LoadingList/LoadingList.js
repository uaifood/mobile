import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView
} from 'react-native';
import LoadingOrderRow from '../LoadingOrderRow/LoadingOrderRow';

export default class LoadingList extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows("dummyDataSource".split('')),
    }
  }

  render() {
    return (
      <View style={styles.row}>
        <ListView scrollEnabled={false}
          dataSource={this.state.dataSource}
          renderRow={(teste) => <LoadingOrderRow />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
