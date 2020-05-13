import React, { Component } from 'react'
import { Text, StyleSheet, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import * as firebase from 'firebase';
import 'firebase/firestore';

import ListItems from '../data/tempData';
import { addList } from '../api/FirebaseStore';

export default class AddList extends Component {
  state = { 
    name: '',
    price: ''
  }

  onAddItemHandler = () => {
    const { name, price } = this.state;

    // ListItems.push({ name, price });
    const ref = firebase
      .firestore()
      .collection('Shoes')
		  .add({ name, price })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));

    this.props.closeModal();
  }
  
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
        <TouchableOpacity style={styles.close} onPress={this.props.closeModal}>
          <AntDesign name="close" size={24} color="gray" />
        </TouchableOpacity>
      
        <Text style={styles.title}>Create Shoes</Text>

        <TextInput style={styles.input} autoCapitalize="none"
          placeholder='Name?'
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />
        <TextInput style={styles.input} autoCapitalize="none"
          placeholder='Price?'
          onChangeText={(price) => this.setState({price})}
          value={this.state.price}
        />

        <TouchableOpacity style={styles.button} onPress={this.onAddItemHandler}>
          <Text style={styles.buttonTitle}>Create</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  close: {
    position: 'absolute',
    top: 10,
    right: 10
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'blue',
    marginVertical: 20,
    padding: 10,
    borderRadius: 10
  },
  button: {
    width: '80%',
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  }
})
