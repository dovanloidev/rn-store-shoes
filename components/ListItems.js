import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';
import TodoModal from './TodoModal';
import { AntDesign } from '@expo/vector-icons';

export default class ListItems extends React.Component {
	state = {
		showListVisible: false,
		imageUrl: '',
	};

	onListVisible = () => {
		this.setState({ showListVisible: !this.state.showListVisible });
	};

	componentDidMount() {
		const image = this.props.list.image;
		if (image != null || image != '') {
			this.setState({ imageUrl: image });
		}
		console.log(this.state.imageUrl);
	}

	render() {
		console.log(this.state.imageUrl)
		return (
			<View style={styles.container}>
				<Modal animationType="slide" visible={this.state.showListVisible}>
					<TodoModal closeModal={this.onListVisible} />
				</Modal>
				<Image source={{ uri: this.state.imageUrl }} style={{ width: 100, height: 100 }} />
				<TouchableOpacity style={styles.buttonClose}>
					<AntDesign name="close" size={24} color="white" />
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={this.onListVisible}>
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
	image: {
		width: 100,
		height: 100,
	},
	buttonClose: {
		position: 'absolute',
		top: 5,
		right: 10,
	},
	button: {
		flex: 1,
	},
	title: {
		color: 'black',
		fontSize: 18,
		fontWeight: '700',
		flex: 1,
	},
});
