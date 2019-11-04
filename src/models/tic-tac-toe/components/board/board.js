import React, { Component } from 'react';

import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Square } from '../../components'

export class Board extends Component {

    state = {
        squares: Array(9).fill(null),
        xIsNext: true
    };

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
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    handleRestart(){
        this.setState({ squares: Array(9).fill(null), xIsNext: true})
    }

    handleClick(i) {
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
        return <Square
            value={this.state.squares[i]}
            onPress={() => this.handleClick(i)}
        />
    };

    render() {
        const winner = this.calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = `Vencedor: ${winner}`
        } else {
            status = `Próximo jogador: ${this.state.xIsNext ? 'X' : 'O'}`
        }

        return (
            <View style={styles.container}>
                <Text style={styles.status}>{status}</Text>
                <View style={styles.board}>
                    <View style={styles.squares}>
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </View>
                    <View style={styles.squares}>
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </View>
                    <View style={styles.squares}>
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </View>
                </View>
                <TouchableOpacity style={styles.restart} onPress={() => this.handleRestart()}>
                    <Text style={styles.text}>Reiniciar</Text>
                </TouchableOpacity>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    },
    squares: {
        display: 'flex',
        flexDirection: 'row',
    },
    board: {
        margin: 12,
        padding: 12
    },
    status: {
        backgroundColor: '#0084d1',
        color: 'white',
        borderRadius: 4,
        fontSize: 16,
        padding: 12,
        margin: 12
    },
    restart: {
        backgroundColor: '#0084d1',
        borderRadius: 4,
        fontSize: 16,
        padding: 12,
        margin: 12
    },
    text: {
        fontSize: 16,
        color: 'white'
    }
});
