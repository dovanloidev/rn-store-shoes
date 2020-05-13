import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image, Alert } from 'react-native';
import TodoModal from './TodoModal';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import * as firebase from 'firebase';
import 'firebase/firestore';

export default class ListItems extends React.Component {
	state = {
		showListVisible: false,
		imageUrl: null,
	};

	onListVisible = () => {
		this.setState({ showListVisible: !this.state.showListVisible });
	};

	onRemoveHandler = () => {
		let id = this.props.list.id;
		firebase.firestore().collection('Shoes').doc(id).delete();
		Alert.alert('Remove thanh cong');
	};

	componentDidMount() {
		// console.warn(this.props.list.id)
	}

	render() {
		return (
			<View style={styles.container}>
				<Modal animationType="slide" visible={this.state.showListVisible}>
					<TodoModal
						list={this.props.list}
						closeModal={this.onListVisible} />
				</Modal>

				<TouchableOpacity style={styles.buttonClose} onPress={this.onRemoveHandler}>
					<AntDesign name="close" size={24} color="black" />
				</TouchableOpacity>

				<TouchableOpacity style={styles.button} onPress={this.onListVisible}>
					<Image
						// source={{ uri: this.props.image }}
						source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
						resizeMode="cover"
						style={{ width: 100, height: 100, borderRadius: 10 }}
					/>
					<Text style={styles.title}>{this.props.list.name}</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		marginHorizontal: 16,
		paddingVertical: 32,
		marginTop: 30,
		alignItems: 'center',
		width: 200,
		borderRadius: 20,
	},
	buttonClose: {
		position: 'absolute',
		top: 5,
		right: 10,
	},
	button: {
		flex: 1,
		alignItems: 'center',
	},
	title: {
		color: 'black',
		fontSize: 18,
		fontWeight: '700',
		flex: 1,
		marginTop: 10,
	},
});
