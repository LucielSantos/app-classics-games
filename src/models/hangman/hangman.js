import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export const Hangman = () => {
  const [step, setStep] = useState(1)

  const handleBeginGame = () => 
    setStep(2)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Forca</Text>
      <View style={styles.body}>

        {
          step === 1 &&
          <>
            <Text style={styles.textBody}>Insira uma Palavra para Começar o Jogo</Text>
             
            <TextInput
            style={styles.input}
            placeholder='Insira a palavra'
            placeholderTextColor='#757575'
            />

            <TouchableOpacity style={styles.beginButton}>
              <Text style={styles.textButton}>Começar o Jogo!</Text>
          </TouchableOpacity>
          </>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#262626',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  title:{
    fontSize: 30,
    fontFamily: 'McLaren-Regular',
    color: 'white',
    marginTop: 20,
  },
  body:{
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBody:{
    fontSize: 26,
    fontFamily: 'McLaren-Regular',
    color: 'white',
    marginBottom: 50,
    textAlign: 'center'
  },
  input:{
    width: '100%',
    borderWidth: 3,
    borderColor: '#3348b5',
    borderRadius: 10,
    color: 'white',
    fontSize: 16,
  },
  beginButton:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3348b5', 
    height: 50,
    marginTop: 30,
    padding: 20,
    borderRadius: 10
  },
  textButton:{
    color: 'white',
    fontFamily: 'McLaren-Regular',
  }
})