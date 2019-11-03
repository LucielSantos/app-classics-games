import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { Board } from './components'
export class TicTacToe extends Component {
  render() {
    return (
      <View>
        <Board />
      </View>
    );
  }
}

const styles = StyleSheet.create({

})