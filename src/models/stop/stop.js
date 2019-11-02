import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

import {alphabet, times} from '../../utils'

export const Stop = ({navigation}) => {

  const [position, setPosition] = useState(0);
  const [start, setStart] = useState(false);
  const [loop, setLoop] = useState();

  const handleChangeStart =() => {
    console.log(start)
    setStart(!start)
  }

  useEffect(() => {
    if(start){
      setPosition(0)
      let n = 0
      setLoop(
        setInterval(() => {
          if(n === 26) n = 0

          setPosition(n)
          n++
        },times[Math.floor(Math.random() * 27)])
      )
    }else{
      clearInterval(loop)
    }
  },[start])

  useEffect(() => {
    console.log(position)
  }, [position])
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton} onPress={()=> navigation.goBack()}>Sair</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Salvar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <Text style={styles.titleBody}>Letra Selecionada:</Text>
        
        <View style={styles.containerLetter}>
          {
            start
            ? <ActivityIndicator size={80} color='#0084d1'/>
            : <Text style={styles.letter}>{alphabet[position]}</Text>
          }
        </View>
      </View>

      <View style={styles.footer}>
        <View  style={styles.containerButton}>
          <TouchableOpacity value={start} onPress={handleChangeStart} style={styles.buttonStart}>
            <Text style={styles.textButton}>Start</Text>
          </TouchableOpacity>
        </View>
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
    padding: 20
  },
  footer:{
    width: 'auto',
    backgroundColor: '#3348b5',
    elevation: 10,
    alignItems: 'center',
    borderRadius: 100 ,
    padding: 10,
  },
  containerButton:{
    backgroundColor: '#0084d1',
    elevation: 5,
    borderRadius: 60,
    height: 75,
    width: 75,
  },
  buttonStart:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  textButton:{
    color: 'white',
    fontFamily: 'McLaren-Regular'
  },
  header:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
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
  body:{
    height: 400,
    width: '100%',
    borderWidth: 3,
    borderColor: '#3348b5',
    borderRadius: 15,
    alignItems: 'center',
    padding: 10,
    overflow: 'hidden',
  },
  titleBody: {
    fontFamily: 'McLaren-Regular',
    color: 'white',
    fontSize: 16
  },
  containerLetter:{
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letter:{
    fontSize: 150,
    color: 'white',
    fontFamily: 'McLaren-Regular'
  }
})