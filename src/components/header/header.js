import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



export const Header = ({
  title = String,
  leftIcon,
  rightIcon,
}) => {
  return (
    <View style={ styles.containerHeader }>
      {leftIcon}
      <Text style={ styles.textHeader }>{title}</Text>
      {rightIcon}
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader:{
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0080ff',
    marginBottom: 20,
    elevation: 7,
    flexDirection: 'row',
  },
  textHeader:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  }
})