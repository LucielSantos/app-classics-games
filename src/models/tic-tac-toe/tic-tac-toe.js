import React from 'react';
import {
  View
} from 'react-native';

import styles from './tictactoe.styles'
import { Square, Board } from './components'


export const TicTacToe = () => {
  return (
    <View>

      <Board />

    </View>
  );
}
