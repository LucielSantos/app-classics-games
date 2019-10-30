import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

export const Home = ({
  navigation
}) => {
  return (
    <View>
      <Text>Home Page</Text>
      <Button
        title='TOUCH HERE'
        onPress={() => navigation.navigate('TicTacToe')}
      />
    </View>
  );
}