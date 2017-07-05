import 'react-native';
import { shallow } from 'enzyme';
import { TabViewAnimated } from 'react-native-tab-view';
import React from 'react';
import App from './App';

test('renders app component', () => {
	const app = shallow(<App />);
	expect(app.length).toBe(1);
	expect(app.find(TabViewAnimated).length).toBe(1);
});
