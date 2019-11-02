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
    backgroundColor: 'black',
    elevation: 20,
    flexDirection: 'row',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  },
  textHeader:{
    fontSize: 16,
    fontFamily: 'McLaren-Regular',
    color: 'white',
    fontFamily: 'McLaren-Regular'
  }
})