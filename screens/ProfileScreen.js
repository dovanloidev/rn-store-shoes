import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';

export default class ProfileScreen extends Component {
	state = {
		email: '',
		displayName: '',
	};

	componentDidMount() {
		const { email, displayName } = firebase.auth().currentUser;

		this.setState({ email, displayName });
	}

	onLogoutHandler = () => {
		firebase.auth().signOut();
	};

	render() {
		return (
			<View style={styles.container}>
				<Text> Hello {this.state.email} </Text>
				<TouchableOpacity onPress={this.onLogoutHandler}>
					<Text>Log out</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},
});
