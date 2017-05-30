import { StyleSheet } from 'react-native';
import { Transparent, White } from '../utils/Colors.style';

const AppStyle = StyleSheet.create({
	container: {
		flex: 1
	},
	icons: {
		width: 20,
		height: 20
	},
	iconPlus: {
		width: 36,
		height: 36
	},
	tabbar: {
		backgroundColor: White
	},
	tab: {
		height: 49,
		opacity: 1
	},
	indicator: {
		backgroundColor: Transparent
	}
});

export { AppStyle };
