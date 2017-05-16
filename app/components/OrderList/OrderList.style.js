import { StyleSheet } from 'react-native';
const ColorOne = '#fa8072';
const ColorTwo = '#f0ffff';
const ColorThree = '#333333';
const OrderListStyle = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%'
	},
	header: {
		width: '100%',
		height: 65,
		backgroundColor: ColorOne
	},
	bar: {
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 18,
		fontWeight: 'bold',
		color: ColorTwo,
		textAlign: 'center',
		margin: 30
	},
	name: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	owner: {
		textAlign: 'center',
		color: ColorThree,
		fontSize: 20
	},
	loading: {
		margin: 50
	}
});
export { OrderListStyle };
