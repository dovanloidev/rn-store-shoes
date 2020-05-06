import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';

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
				<Ionicons name='md-person' size={50} color='black' />
				<Text style={styles.title}> {this.state.email} </Text>
				<TouchableOpacity style={styles.button} onPress={this.onLogoutHandler}>
					<Text style={styles.buttonTitle}>Log out</Text>
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
	title: {
		fontSize: 20,
		fontWeight: '800',
		marginVertical: 20,
	},
	button: {
		backgroundColor: 'blue',
		width: '80%',
		padding: 10,
		alignItems: 'center',
		borderRadius: 10,
	},
	buttonTitle: {
		fontSize: 18,
		color: 'white'
	}
});
