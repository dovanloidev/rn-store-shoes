import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

import LoadingScreen from './screens/LoadingScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';

import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import ProfileScreen from './screens/ProfileScreen';

import * as firebase from 'firebase';

var firebaseConfig = {
	apiKey: 'AIzaSyDDeFM5wVG_K9YKIL9TD0VgC3zn1mVg09Y',
	authDomain: 'storeshoes-812f1.firebaseapp.com',
	databaseURL: 'https://storeshoes-812f1.firebaseio.com',
	projectId: 'storeshoes-812f1',
	storageBucket: 'storeshoes-812f1.appspot.com',
	messagingSenderId: '791055860836',
	appId: '1:791055860836:web:c82e7e9eb207b636bc8b71',
	measurementId: 'G-DP7KMW9R1M',
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}


const AppTabNavigator = createBottomTabNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Ionicons name="md-home" size={24} color={tintColor} />,
			},
		},
		Add: {
			screen: AddScreen,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Ionicons name="md-add-circle" size={24} color={tintColor} />,
			},
		},
		Profile: {
			screen: ProfileScreen,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Ionicons name="md-person" size={24} color={tintColor} />,
			},
		},
	},
	{
		tabBarOptions: {
			showLabel: false,
		},
	}
);

const AuthStack = createStackNavigator({
	Register: RegisterScreen,
	Login: LoginScreen,
});

export default createAppContainer(
	createSwitchNavigator(
		{
			Loading: LoadingScreen,
			App: AppTabNavigator,
			Auth: AuthStack,
		},
		{
			initialRouteName: 'Loading',
		}
	)
);
