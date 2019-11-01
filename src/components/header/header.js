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
      <Text style={ styles.textHeader }>{title.toUpperCase()}</Text>
      {rightIcon}
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader:{
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#303030',
    elevation: 7,
    flexDirection: 'row',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
  },
  textHeader:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'McLaren-Regular'
  }
})