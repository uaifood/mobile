import { StyleSheet } from 'react-native';
import { LightRed, Transparent, Yellow, White } from '../utils/Colors.style';

const AppStyle = StyleSheet.create({
	container: {
		flex: 1
	},
	icons: {
		width: 24,
		height: 24
	},
	tabbar: {
		backgroundColor: White
	},
	tab: {
		height: 49
	},
	icon: {
		backgroundColor: Transparent,
		color: LightRed
	},
	indicator: {
		backgroundColor: Yellow
	},
	label: {
		color: LightRed,
		fontSize: 9,
		fontWeight: '700'
	}
});

export { AppStyle };
