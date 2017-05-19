import { StyleSheet } from 'react-native';
import { LightGrey, MediumGrey } from '../../utils/Colors.style';

const LoadingOrderRowStyle = StyleSheet.create({
	row: {
		flex: 1,
		flexDirection: 'row',
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: LightGrey,
		width: '100%'
	},
	greyLine: {
		backgroundColor: MediumGrey,
		height: 16,
		width: '100%',
		marginBottom: 10
	},
	greyCircle: {
		width: 50,
		height: 50,
		marginRight: 10,
		borderRadius: 25,
		backgroundColor: MediumGrey
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
export { LoadingOrderRowStyle };
