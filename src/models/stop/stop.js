import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export const Stop = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Sair</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Salvar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <View  style={styles.containerButton}>
          <TouchableOpacity style={styles.buttonStart}>
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
    borderRadius: 10
  }
})