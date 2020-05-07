import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';
import TodoModal from './TodoModal';
import { AntDesign } from '@expo/vector-icons';


export default class ListItems extends React.Component {
	state = {
		showListVisible: false,
	};

	onListVisible = () => {
		this.setState({ showListVisible: !this.state.showListVisible });
	};

	render() {
		return (
			<View style={styles.container}>
				<Modal animationType="slide" visible={this.state.showListVisible}>
					<TodoModal closeModal={this.onListVisible} />
				</Modal>

				<TouchableOpacity style={styles.buttonClose}>
					<AntDesign name="close" size={24} color="white" />
				</TouchableOpacity>

				<TouchableOpacity style={styles.button} onPress={this.onListVisible}>
					<Image
						source={{uri: this.props.list.image}}
						style={{ width: 100, height: 100 }}
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
		alignItems: 'center'
	},
	title: {
		color: 'black',
		fontSize: 18,
		fontWeight: '700',
		flex: 1,
		marginTop: 10
	},
});
