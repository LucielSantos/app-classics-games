import React from 'react';
import { Text, Button, StyleSheet, TouchableOpacity } from 'react-native';


export const ButtonHome = ({
  title = String,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      style={styles.containerButton}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerButton:{
    padding: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: 'white',
    fontSize: 18,
    fontFamily: 'McLaren-Regular'
  }
})
