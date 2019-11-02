import React from 'react';

import {
  SafeAreaView,
} from 'react-native';

// import Routes from './routes'
import { TicTacToe } from './models'

export default function App () {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Routes /> */}
      <TicTacToe />
    </SafeAreaView>
  );
};
