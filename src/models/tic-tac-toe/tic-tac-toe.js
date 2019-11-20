import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Board } from './components';

export const TicTacToe = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Board navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
  }
});