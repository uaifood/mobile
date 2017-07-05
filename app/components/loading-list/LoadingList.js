import React, { Component } from 'react';
import {
  View,
  ListView
} from 'react-native';
import LoadingOrderRow from '../loading-order-row/LoadingOrderRow';
import { LoadingListStyle } from './LoadingList.style';

export default class LoadingList extends Component {
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		this.state = {
			dataSource: ds.cloneWithRows('dummyDataSource'.split(''))
		};
	}

	render() {
		return (
			<View style={LoadingListStyle.row}>
				<ListView scrollEnabled={false}
					dataSource={this.state.dataSource}
					renderRow={() => <LoadingOrderRow />}
				/>
			</View>
		);
	}
}
