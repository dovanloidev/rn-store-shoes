import React, { Component } from 'react'
import { Text, StyleSheet, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'

const AddList = (props) => {
  return (
		<KeyboardAvoidingView style={styles.container} behavior={'padding'}>
			<TouchableOpacity style={styles.close} onPress={props.closeModal}>
				<AntDesign name="close" size={24} color="gray" />
      </TouchableOpacity>
      
      <Text style={styles.title}>Create Shoes</Text>

      <TextInput style={styles.input} autoCapitalize="none" placeholder='Name?' />
      <TextInput style={styles.input} autoCapitalize="none" placeholder='Price?' />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}>Create</Text>
      </TouchableOpacity>
		</KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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

export default AddList;