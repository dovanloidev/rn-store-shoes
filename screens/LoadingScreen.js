import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase';

export default class LoadingScreen extends Component {
	componentDidMount() {
		firebase.auth().onAuthStateChanged((user) => {
			this.props.navigation.navigate(user ? 'Home' : 'Auth');
		});
	}

	render() {
		console.log('2342343');
		return (
			<View style={styles.container}>
				<Text> Loading... </Text>
				<ActivityIndicator />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
