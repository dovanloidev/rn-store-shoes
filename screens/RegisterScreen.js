import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as firebase from 'firebase';

export default class RegisterScreen extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		errorMessage: null,
	};

	onRegisterHandler = () => {
		const { name, email, password } = this.state;

		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((userCredentials) => {
				return userCredentials.user.updateProfile({
					displayName: name,
				});
			})
			.catch((error) => this.setState({ errorMessage: error.message }));
	};

	render() {
		return (
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={styles.container}>
					<Text style={styles.title}> RegisterScreen </Text>
					<View style={styles.errorContainer}>
						<Text style={styles.error}> {this.state.errorMessage} </Text>
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.inputTitle}>Full name: </Text>
						<TextInput
							style={styles.input}
							autoCapitalize={'none'}
							onChangeText={(name) => this.setState({ name })}
							value={this.state.name}
						/>
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
					<TouchableOpacity style={styles.buttonContainer} onPress={this.onRegisterHandler}>
						<Text style={styles.buttonTitle}>Sign up</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
						<Text style={{ fontSize: 16, color: 'gray' }}>
							New to ShoesApp? <Text style={{ color: '#0000FF' }}>Login</Text>
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
		marginTop: 10,
		padding: 15,
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
