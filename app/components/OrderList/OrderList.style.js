import { StyleSheet } from 'react-native';
import { Salmon, LightBlue, DarkGrey } from '../../utils/Colors.style';

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
		backgroundColor: Salmon
	},
	bar: {
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 18,
		fontWeight: 'bold',
		color: LightBlue,
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
		color: DarkGrey,
		fontSize: 20
	},
	loading: {
		margin: 50
	}
});
export { OrderListStyle };
