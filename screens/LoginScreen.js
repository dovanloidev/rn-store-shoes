import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as firebase from 'firebase';

export default class LoginScreen extends Component {
	state = {
		email: '',
		password: '',
		errorMessage: null,
	};

	onLoginHandler = () => {
		const { email, password } = this.state;

		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.catch((err) => this.setState({ errorMessage: err.message }));
	};

	render() {
		return (
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={styles.container}>
					<Text style={styles.title}> LoginScreen </Text>
					<View style={styles.errorContainer}>
						<Text style={styles.error}> {this.state.errorMessage} </Text>
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.inputTitle}>Email Address: </Text>
						<TextInput
							style={styles.input}
							autoCapitalize={'none'}
							onChangeText={(email) => this.setState({ email })}
							value={this.state.email}
						/>
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.inputTitle}>PassWord: </Text>
						<TextInput
							style={styles.input}
							autoCapitalize={'none'}
							secureTextEntry
							onChangeText={(password) => this.setState({ password })}
							value={this.state.password}
						/>
					</View>
					<TouchableOpacity style={styles.buttonContainer} onPress={this.onLoginHandler}>
						<Text style={styles.buttonTitle}>Sign in</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
						<Text style={{ fontSize: 16, color: 'gray' }}>
							New to ShoesApp? <Text style={{ color: '#0000FF' }}>Sign Up</Text>
						</Text>
					</TouchableOpacity>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		padding: 16,
	},
	title: {
		fontSize: 30,
	},
	errorContainer: {
    width: '90%',
    marginTop: 20,
    padding: 15
	},
	error: {
		fontSize: 18,
		color: 'red',
	},
	inputContainer: {
		marginVertical: 20,
		width: '90%',
	},
	inputTitle: {
		fontSize: 18,
		color: 'gray',
	},
	input: {
		borderBottomColor: 'gray',
		borderBottomWidth: 1,
	},
	buttonContainer: {
		marginVertical: 20,
		backgroundColor: '#0000FF',
		padding: 15,
		width: '90%',
		alignItems: 'center',
		borderRadius: 20,
	},
	buttonTitle: {
		color: 'white',
		fontSize: 18,
	},
});
