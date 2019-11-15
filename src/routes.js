import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import {
  Home,
  TicTacToe,
  Stop,
  SplashScreen,
} from './models'

export default createAppContainer(
  createStackNavigator(
    {
      Home,
      TicTacToe,
      Stop,
      SplashScreen,
    },
    {
      headerMode: 'none',
      initialRouteName: 'Home'
    }
  )
)