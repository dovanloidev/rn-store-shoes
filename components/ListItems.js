import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ListItems = ({ list }) => {
  return (
		<TouchableOpacity style={styles.container}>
				<Text style={styles.title}>{list.name}</Text>
		</TouchableOpacity>
  );  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    marginHorizontal: 16,
    paddingVertical: 32,
    marginTop: 30,
    alignItems: 'center',
    width: 200,
    borderRadius: 20,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700'
  }
});

export default ListItems;
