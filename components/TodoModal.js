import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity, TextInput, Alert } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import * as firebase from 'firebase';
import 'firebase/firestore'

export default class TodoModal extends Component {
  state = {
    name: '',
    price: null
  }
  
  onUpdateHandler = () => {
    let id = this.props.list.id
    const { name, price } = this.state
    firebase.firestore().collection('Shoes').doc(id).update({
      name,
      price
    })
    Alert.alert('Update thanh cong')
  }

  componentDidMount() {
    this.setState({
      name: this.props.list.name,
      price: this.props.list.price
    })
  }
  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.buttonClose} onPress={this.props.closeModal}>
          <AntDesign name='close' size={24} color='black'/>
        </TouchableOpacity>

        <Text style={styles.title}>Edit Shoes</Text>

        <TextInput
          style={styles.input}
          placeholder='Name?'
          value={this.state.name}
          onChangeText={(name) => this.setState({name})}
        />
        <TextInput
          style={styles.input}
          placeholder='Name?'
          value={this.state.price}
          onChangeText={(price) => this.setState({price})}
        />

        <TouchableOpacity style={styles.button} onPress={this.onUpdateHandler}>
          <Text style={styles.buttonTitle}>Update</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonClose: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    marginVertical: 20,
    borderWidth: 1,
    borderColor: 'gray',
    width: '80%',
    padding: 10,
    borderRadius: 10
  },
  button: {
    marginTop: 10,
    backgroundColor: 'blue',
    width: '80%',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10
  },
  buttonTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500'
  }
})
