import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default class TodoModal extends Component {
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
        />
        <TextInput
          style={styles.input}
          placeholder='Name?'
        />

        <TouchableOpacity style={styles.button}>
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
