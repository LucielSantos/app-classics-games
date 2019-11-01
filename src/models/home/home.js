import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
} from 'react-native';

import styles from './home.styles'

import { Header, ButtonHome, Separator } from '../../components'

export const Home = ({
  navigation
}) => {
  return (
    <View style={ styles.container }>
      <Header
        title='Jogos Para Jogar com a Galera!!!'
      />
      <View style={ styles.body }>

      <ButtonHome
        title='Jogo da Velha'
        onPress={() => navigation.navigate('TicTacToe')}
        />

        <Separator color='#878787'/>
      <ButtonHome
        title='Stop'
        onPress={() => navigation.navigate('TicTacToe')}
        />
      </View>
    </View>
  );
}