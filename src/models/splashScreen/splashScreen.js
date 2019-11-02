import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import LottieView from 'lottie-react-native'

export const SplashScreen = ({navigation}) => {
  const handleFinish = () => navigation.navigate('Home')
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        speed={1.3}
        loop={false}
        onAnimationFinish={handleFinish}
        source={require('../../assets/animations/react.json')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  }
})