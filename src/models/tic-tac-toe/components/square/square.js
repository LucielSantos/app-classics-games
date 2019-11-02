import React, { Component } from 'react';

import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export class Square extends Component {
    state = {
        vez: ''
    }

    handlePress() {
        if (this.state.vez === '') {
            this.setState({ vez: 'x' })
        }
    }

    render() {
        return (
            <TouchableOpacity style={styles.square} onPress={() => this.handlePress()}><Text>{this.state.vez}</Text></TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    square: {
        height: 80,
        width: 80,
        borderWidth: 1,
        margin: 4
    },
})
