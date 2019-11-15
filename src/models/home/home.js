import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
} from 'react-native';

import LottieView from 'lottie-react-native'

import { Header, ButtonHome, Separator } from '../../components'
import { SplashScreen } from '../'

export const Home = ({
  navigation
}) => {
  const [splash, setSplash] = useState(true)

  const handleFinishSplash = () => 
    setSplash(false)
  
  if(splash){
    return <SplashScreen handleFinish={handleFinishSplash} />
  }else{
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
          
          <Separator color='black'/>
          
          <ButtonHome
            title='Stop'
            onPress={() => navigation.navigate('Stop')}
          />

          <View style={styles.animationContainer}>
            <View style={styles.animation}>
              <LottieView source={require('../../assets/animations/rocket.json')}  autoPlay loop/>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    height: 'auto',
    backgroundColor: '#262626',
  },
  body:{
    padding: 10,
  },
  animationContainer:{
    height: '100%',
    width: '100%',
    marginBottom: -300,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  animation:{
   height: '100%',
   width: 300, 
  }
})