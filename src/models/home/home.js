import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
} from 'react-native';

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
        
        <Separator color='#00064d'/>
        
        <ButtonHome
          title='Stop'
          onPress={() => navigation.navigate('Stop')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    height: 'auto',
    backgroundColor: '#2525b0',
  },
  body:{
    padding: 10,
  } 
})