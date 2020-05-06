import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as firebase from 'firebase';
import 'firebase/firestore';

import ListItem from '../data/tempData';
import ListItems from '../components/ListItems';
import AddList from '../components/AddList';

export default class HomeScreen extends Component {
	state = {
		isVisible: false,
		data: [],
	}

	onOpenModel() {
		this.setState({isVisible: !this.state.isVisible})
	}

	renderList = list => {
		return <ListItems list={list} />
	}

  componentDidMount() {
		firebase
			.firestore()
			.collection('Shoes')
			.onSnapshot((snapShot) => {
				const list = [];
				snapShot.forEach((doc) => {
					list.push({
						name: doc.data().name,
						price: doc.data().price,
						image: doc.data().image,
					});
				});
				this.setState({ 
					data: list.sort((a, b) => {
						return (a.name > b.name)
					})
				 });
			});
	}
	
	render() {
		return (
			<View style={styles.container}>
				<Modal animationType="slide" visible={this.state.isVisible} onRequestClose={() => this.onOpenModel()}>
					<AddList closeModal={() => this.onOpenModel()} />
				</Modal>
				<View style={{ flexDirection: 'row' }}>
					<View style={styles.line} />

					<Text style={styles.titleContainer}>
						Shoes <Text style={styles.title}>Lists</Text>
					</Text>

					<View style={styles.line} />
				</View>

				<TouchableOpacity onPress={() => this.onOpenModel()}>
					<View style={{ marginTop: 20 }}>
						<AntDesign name="plussquareo" size={40} color="blue" />
					</View>
				</TouchableOpacity>

				<Text style={{ color: 'blue' }}>Add List</Text>

				<View style={{ height: 300, paddingLeft: 32 }}>
					<FlatList
						data={this.state.data}
						horizontal={true}
						showsHorizontalScrollIndicator={true}
						keyExtractor={(item) => item.name}
						renderItem={({ item }) => this.renderList(item)}
					/>
				</View>
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
	line: {
		flex: 1,
		height: 1,
		backgroundColor: 'blue',
		alignSelf: 'center',
	},
	titleContainer: {
		fontSize: 30,
		fontWeight: '800',
		marginHorizontal: 50,
		alignItems: 'center'
	},
	title: {
		color: 'blue',
	}
});
