import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Separator = ({color = 'white'}) => {

  return (
    <View style={{ borderBottomWidth: 0.8, borderColor: color }}/>
  );
}
