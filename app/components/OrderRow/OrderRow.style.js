import { StyleSheet } from 'react-native';
const Grey = '#EEE';
const OrderRowStyle = StyleSheet.create({
	row: {
		flex: 1,
		flexDirection: 'row',
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: Grey,
		width: '100%'
	},
	thumbnail: {
		width: 50,
		height: 50,
		marginRight: 10,
		borderRadius: 25
	},
	textContainer: {
		flex:1,
		alignItems:'flex-start',
		justifyContent:'center'
	},
	owner: {
		fontSize: 14,
		paddingTop: 5,
		paddingBottom: 5
	},
	restaurant: {
		fontSize: 20,
		fontWeight: 'bold'
	}
});

export { OrderRowStyle };
