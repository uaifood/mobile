import { StyleSheet } from 'react-native';

const TabViewStyle = StyleSheet.create({
	container: {
		flex: 1
	},
	icons: {
		width: 24,
		height: 24
	},
	tabbar: {
		backgroundColor: 'white'
	},
	tab: {
		height: 49
	},
	icon: {
		backgroundColor: 'transparent',
		color: '#E8655C'
	},
	indicator: {
		backgroundColor: '#ffeb3b'
	},
	label: {
		color: '#E8655C',
		fontSize: 9,
		fontWeight: '700'
	}
});

export { TabViewStyle };
