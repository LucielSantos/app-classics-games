import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';
import Icon  from "react-native-vector-icons/MaterialIcons";

export const Hangman = ({navigate}) => {
  const [step, setStep] = useState(1)
  const [word, setWord] = useState('')
  const [letter, setLetter] = useState('')
  const [arrayWord, setArrayWord] = useState('')

  const handleBeginGame = () => 
    step === 1 && (prepareWord(), setStep(2))

  const onChangeWord = text =>
    setWord(text)

  const onChangeLetter = text =>
    setLetter(text.toUpperCase())

  const onSubmit = text =>{
    console.log(letter)
  }

  const handleBack = () =>
    step === 1 ? navigate.goBack() : (setStep(1), setWord(''))

  const handleSave = () =>
    console.log('Salvando')

  const prepareWord = () => {
    const arrayWord = word.toUpperCase().split('')
    const arrayObject = arrayWord.map(letter => ({letter, status: true}))

    setArrayWord(arrayObject)
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerNavigate}>
        <TouchableOpacity style={styles.button} onPress={handleBack}>
          <Text style={styles.textButton}>{ step === 1 ? 'Sair' :  'Voltar' }</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSave} >
          <Text style={styles.textButton}>Salvar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>{ step === 1 ? 'Jogo da Forca' : 'O Jogo Começou! ;)'}</Text>
      <View style={styles.body}>

        {
          step === 1 &&
          <>
            <Text style={styles.textBody}>Insira uma Palavra para Começar o Jogo</Text>
             
            <TextInput
              style={styles.input}
              placeholder='Insira a palavra'
              placeholderTextColor='#757575'
              value= {word}
              onChangeText={onChangeWord}
            />

            <TouchableOpacity style={styles.beginButton} onPress={handleBeginGame}>
              <Text style={styles.textButton}>Começar o Jogo!</Text>
            </TouchableOpacity>
          </>
        }

        {
          step === 2 &&
          <>
            <View style={styles.hangmanContainer}>
              <Image
                style={styles.img}
                source={require('../../assets/images/hangman.png')}
              />
              <View style={styles.containerLetters}>
                {
                  arrayWord.map((obj, index) =>(
                    obj.status ?
                      <Text key={index} style={styles.letter}>{obj.letter}</Text>
                    :
                      <Text key={index} style={styles.letter}>_</Text>
                  ))
                }
              </View>
            </View>

            <View style={styles.footer}>    
              <TextInput
                style={styles.inputLetter}
                placeholder='Insira uma Letra'
                placeholderTextColor='#757575'
                value={letter}
                onChangeText={onChangeLetter}
                maxLength={1}
              />

              {
                letter.length > 0 &&
                <TouchableOpacity style={styles.containerEnter} onPress={onSubmit}>
                  <Icon name='send' size={25} color='#3348b5' />
                </TouchableOpacity>
              }
            </View>
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
  },
  button:{
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3348b5',
    padding: 10,
    borderRadius: 10,
    elevation: 10
  },
  containerNavigate:{
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row'
  },
  hangmanContainer:{
    flex: 1,
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20
  },  
  img:{
    width: '70%',
    height: 200,
    resizeMode: 'stretch',
  },
  letter:{
    color: 'white',
    fontSize: 40,
    marginHorizontal: 10,
  },
  containerLetters:{
    flex: 1,
    flexWrap: 'wrap',
    width:'100%',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  footer:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#262626',
  },
  inputLetter:{
    width: '100%',
    borderBottomWidth: 3,
    borderBottomColor: '#3348b5',
    borderRadius: 10,
    color: 'white',
    fontSize: 16,
    width: 130,
  },
  enterText:{
    color: 'white',
    fontFamily: 'McLaren-Regular',
  },
  containerEnter:{
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 50,
  }
})