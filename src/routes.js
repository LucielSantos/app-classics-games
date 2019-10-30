import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import {
  Home,
  TicTacToe
} from './models'

export default createAppContainer(
  createStackNavigator(
    {
      Home,
      TicTacToe,
    },
    {
      headerMode: 'none',
      initialRouteName: 'Home'
    }
  )
)