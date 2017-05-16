import { StyleSheet } from 'react-native';

const LightGrey = '#EEE';

const OrderDetailsStyle = StyleSheet.create({
	row: {
		flex: 1,
		flexDirection: 'row',
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: LightGrey,
		width: '100%'
	},
	thumbnail: {
		width: 50,
		height: 50,
		marginRight: 10,
		borderRadius: 25
	},
	owner: {
		fontSize: 14,
		paddingTop: 5,
		paddingBottom: 5,
		width: '80%' //FIXME
	},
	restaurant: {
		fontSize: 20,
		fontWeight: 'bold'
	}
});

export { OrderDetailsStyle };
