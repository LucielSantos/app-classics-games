import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Separator = ({color = 'white'}) => {

  return (
    <View style={{ borderBottomWidth: 1, borderColor: color }}/>
  );
}
