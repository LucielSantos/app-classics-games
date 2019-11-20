import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Keyboard
} from 'react-native';
import Icon  from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from '@react-native-community/async-storage'

import {hangmanImg} from '../../assets/images/hangmanImg'

export const Hangman = ({navigation }) => {
  const [step, setStep] = useState(1)
  const [word, setWord] = useState('')
  const [letter, setLetter] = useState('')
  const [arrayWord, setArrayWord] = useState('')
  const [hangman, setHangman] = useState(0)
  const [dead, setDead] = useState(false)
  const [end, setEnd] = useState(false)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadLocalData = async () =>{
      try {
        setLoading(true)

        const localData = await AsyncStorage.getItem('dataHangman')
        const data = JSON.parse(localData)

        setStep(data.step)
        setWord(data.word)
        setLetter(data.letter)
        setArrayWord(data.arrayWord)
        setHangman(data.hangman)
        setDead(data.dead)
        setEnd(data.end)

        setLoading(false)
      } catch (error) {
        console.log(error)
      }

    }

    const load = async () => {
      const verif = await AsyncStorage.getItem('dataHangman')

      if(verif !== null){
        await loadLocalData()
      }
    }

    load()
    
  }, [])

  const handleBeginGame = () => 
    step === 1 && (prepareWord(), setStep(2))

  const onChangeWord = text =>
    setWord(text)

  const onChangeLetter = text =>
    setLetter(text.toUpperCase())

  const onSubmit = () =>{
    let match = true
    let isEnd = true
    setArrayWord([
      ...arrayWord.map(obj => {
        let data = {}
        
        if(obj.letter === letter){
          match = false
          data = {...obj, status: true}
        }else{
          data = obj
        }

        if(data.status === false) {
          isEnd = false
        }
        return data
      })
    ])

    Keyboard.dismiss()
    setLetter('')
    const n = hangman+1 
    match ? setHangman(n) : ''
    hangman === 5 ? setDead(true) : ''
    setEnd(isEnd)
  }

  const handleBack = async () =>
    step === 1 ? navigation.goBack() : (setStep(1), setWord(''), await AsyncStorage.removeItem('dataHangman'))

  const handleSave = async () =>{
    await AsyncStorage.setItem('dataHangman', JSON.stringify({
      step, word, letter, arrayWord, hangman, dead, end,
    }))
  }

  const prepareWord = () => {
    const arrayWord = word.toUpperCase().split('')
    const arrayObject = arrayWord.map(letter => ({letter, status: false}))

    setArrayWord(arrayObject)
  }

  return (
    <>
    
    <View style={styles.container}>
      {
        loading
        ? <Text style={styles.textBody}>Loading</Text>
        :
          <>
            <View style={styles.containerNavigate}>
              <TouchableOpacity style={styles.button} onPress={handleBack}>
                <Text style={styles.textButton}>{step === 1 ? 'Sair' : 'Voltar'}</Text>
              </TouchableOpacity>

              {
                step === 2 &&
                <TouchableOpacity style={styles.button} onPress={handleSave} >
                  <Text style={styles.textButton}>Salvar</Text>
                </TouchableOpacity>
              }
            </View>

            <Text style={styles.title}>{step === 1 ? 'Jogo da Forca' : 'O Jogo Começou! ;)'}</Text>
            <View style={styles.body}>

              {
                step === 1 &&
                <>
                  <Text style={styles.textBody}>Insira uma Palavra para Começar o Jogo</Text>

                  <TextInput
                    style={styles.input}
                    placeholder='Insira a palavra'
                    placeholderTextColor='#757575'
                    value={word}
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
                      source={hangmanImg[hangman]}
                    />
                    <View style={styles.containerLetters}>
                      {
                        arrayWord.map((obj, index) => (
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
          </>
      }
    </View>
    {
      dead &&
      <View style={styles.containerDead}>
        <Image
          style={styles.imgDead}
          source={hangmanImg.executioner}
        />
      </View>
    }

    {
      end &&
      <View style={styles.containerDead}>
        <Text style={styles.textEnd}>Você Ganhou!!</Text>
      </View>
    }
    </>
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
    width: '60%',
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
  },
  containerDead:{
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgDead:{
    height: 400,
    width: 360,
    resizeMode: 'stretch',
  },
  textEnd:{
    color: 'white',
    fontSize: 60,
    fontFamily: 'McLaren-Regular',
    textAlign: 'center'
  }
})