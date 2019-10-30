import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import {
  Home
} from './models'

export default createAppContainer(
  createStackNavigator(
    {
      Home,
    },
    {
      headerMode: 'none',
      initialRouteName: 'Home'
    }
  )
)