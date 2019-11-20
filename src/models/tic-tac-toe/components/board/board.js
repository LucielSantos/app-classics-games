import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';

import { Square } from '../../components';
import AsyncStorage from '@react-native-community/async-storage';

export const Board = ({ navigation }) => {
  const defaultSquare = Array(9).fill(null);

  const [square, setSquare] = useState(defaultSquare);
  const [player, setPlayer] = useState(true);

  useEffect(() => {
    const load = async () => {
      setSquare(await AsyncStorage.getItem('square').then(value => JSON.parse(value)));
      setPlayer(await AsyncStorage.getItem('player').then(value => JSON.parse(value)));
    };
    load();
  }, []);

  calculateWinner = (param) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        param[a] &&
        param[a] === param[b] &&
        param[a] === param[c]
      ) {
        return param[a];
      }
    }
    return null;
  };

  handleRestart = () => {
    setSquare(defaultSquare)
    setPlayer(true)
  };

  handleClick = async (i) => {
    const param = square.slice();
    if (calculateWinner(param) || param[i]) {
      return;
    };

    param[i] = player ? 'X' : 'O';

    setSquare(param);
    setPlayer(!player);
  };

  renderSquare = (i) => {
    return (<Square
      value={square[i]}
      onPress={() => handleClick(i)}
    />);

  };

  handleBack = async () => {
    navigation.goBack();
    await AsyncStorage.setItem('player', JSON.stringify(player));
    await AsyncStorage.setItem('square', JSON.stringify(square));

  };
  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = `Vencedor: ${winner}`;
  } else {
    status = `Próximo jogador: ${player ? 'X' : 'O'}`;
  };

  return (

    // Início
    <View style={styles.container}>
      <Text style={styles.status}>{status}</Text>
      <View style={styles.board}>
        <View style={styles.squares1}>
          {renderSquare(0)}
          <View style={styles.top}>{renderSquare(1)}</View>
          {renderSquare(2)}
        </View>
        <View style={styles.squares2}>
          {renderSquare(3)}
          <View style={styles.middle}>{renderSquare(4)}</View>
          {renderSquare(5)}
        </View>
        <View style={styles.squares3}>
          {renderSquare(6)}
          <View style={styles.bottom}>{renderSquare(7)}</View>
          {renderSquare(8)}
        </View>
      </View>
      {/* Fim */}

      {/* Início */}
      <TouchableOpacity
        style={styles.restart}
        onPress={() => this.handleBack()}>
        <Text style={styles.text}>Salvar e sair</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.restart}
        onPress={() => handleRestart()}>
        <Text style={styles.text}>Reiniciar</Text>
      </TouchableOpacity>
      {/* Fim */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  squares1: {
    display: 'flex',
    flexDirection: 'row',
  },
  squares2: {
    display: 'flex',
    flexDirection: 'row',
    borderTopWidth: 4,
    borderBottomWidth: 4,
    borderColor: 'white',
  },
  squares3: {
    display: 'flex',
    flexDirection: 'row',
  },
  middle: {
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderColor: 'white',
  },
  top: {
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderColor: 'white',
  },
  bottom: {
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderColor: 'white',
  },
  board: {
    margin: 12,
    padding: 12,
  },
  status: {
    backgroundColor: '#0084d1',
    color: 'white',
    borderRadius: 4,
    fontSize: 16,
    padding: 12,
    margin: 12,
  },
  restart: {
    backgroundColor: '#0084d1',
    borderRadius: 4,
    fontSize: 16,
    padding: 12,
    margin: 12,
    marginTop: 60,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
});
