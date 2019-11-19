import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { Board } from './components'
export class TicTacToe extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Board navigation={this.props.navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
  }
})