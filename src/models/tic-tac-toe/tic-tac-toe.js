import React from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';

import styles from './tictactoe.styles'

export const TicTacToe = () => {
  return (
    <View>
      <View style={styles.boxSquare}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.botao} />
          <TouchableOpacity style={styles.botao} />
          <TouchableOpacity style={styles.botao} />
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.botao} />
          <TouchableOpacity style={styles.botao} />
          <TouchableOpacity style={styles.botao} />
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.botao} />
          <TouchableOpacity style={styles.botao} />
          <TouchableOpacity style={styles.botao} />
        </View>
        
        <View style={styles.teste}>
        <TouchableOpacity style={styles.outroBotao}><Text>Reiniciar jogo</Text></TouchableOpacity>
      </View>
      </View>

      
    </View>
  );
}
