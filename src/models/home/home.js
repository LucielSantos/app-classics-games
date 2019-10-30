import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

import styles from './home.styles'

import { Header } from '../../components'

export const Home = ({
  navigation
}) => {
  return (
    <View style={ styles.container }>
      <Header
        title='Jogos Para Jogar com a Galera!!!'
      />

      <Button
        title='TOUCH HERE'
        onPress={() => navigation.navigate('TicTacToe')}
      />
    </View>
  );
}