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
import FirebaseKey from './config';

var firebaseConfig = FirebaseKey;

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
