import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';

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

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
	Home: HomeScreen,
});

const AuthStack = createStackNavigator({
	Login: LoginScreen,
	Register: RegisterScreen,
});

export default createAppContainer(
	createSwitchNavigator(
		{
			Loading: LoadingScreen,
			App: AppStack,
			Auth: AuthStack,
		},
		{
			initialRouteName: 'Loading'
		}
	)
);
