import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import {
  Home,
  TicTacToe,
  Stop
} from './models'

export default createAppContainer(
  createStackNavigator(
    {
      Home,
      TicTacToe,
      Stop,
    },
    {
      headerMode: 'none',
      initialRouteName: 'Stop'
    }
  )
)