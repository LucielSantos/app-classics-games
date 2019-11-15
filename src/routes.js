import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import {
  Home,
  TicTacToe,
  Stop,
  SplashScreen,
  Hangman,
} from './models'

export default createAppContainer(
  createStackNavigator(
    {
      Home,
      TicTacToe,
      Stop,
      SplashScreen,
      Hangman
    },
    {
      headerMode: 'none',
      initialRouteName: 'Home'
    }
  )
)