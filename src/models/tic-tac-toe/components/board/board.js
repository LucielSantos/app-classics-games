import React, {Component, useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Square} from '../../components';


const [square, setSquare] = useState([]);
const [playerX, setPlayerX] = useState(true);

export class Board extends Component {
  
  calculateWinner(squares) {
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
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  handleRestart() {
    this.setState({squares: Array(9).fill(null), xIsNext: true});
  };

  handleClick(i){
    const squares = this.state.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  };

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onPress={() => this.handleClick(i)}
      />
    );
  };

  handleBack = async () => {
    await AsyncStorage.setItem('quadrado', JSON.stringify(this.state.squares))
    console.log(await AsyncStorage.getItem('quadrado').then((value) => JSON.parse(value)))
    // this.props.navigation.goBack();
  };

  render() {
    const winner = this.calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = `Vencedor: ${winner}`;
    } else {
      status = `Próximo jogador: ${this.state.xIsNext ? 'X' : 'O'}`;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.status}>{status}</Text>
        <View style={styles.board}>
          <View style={styles.squares1}>
            {this.renderSquare(0)}
            <View style={styles.top}>{this.renderSquare(1)}</View>
            {this.renderSquare(2)}
          </View>
          <View style={styles.squares2}>
            {this.renderSquare(3)}
            <View style={styles.middle}>{this.renderSquare(4)}</View>
            {this.renderSquare(5)}
          </View>
          <View style={styles.squares3}>
            {this.renderSquare(6)}
            <View style={styles.bottom}>{this.renderSquare(7)}</View>
            {this.renderSquare(8)}
          </View>
        </View>
        <TouchableOpacity
          style={styles.restart}
          onPress={() => this.handleBack()}>
          <Text style={styles.text}>Sair</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.restart}
          onPress={() => this.handleRestart()}>
          <Text style={styles.text}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

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
