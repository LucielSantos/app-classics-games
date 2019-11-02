import React, { Component } from 'react';

import { View, StyleSheet } from 'react-native';

import { Square } from '../../components'

export class Board extends Component {

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Square />
                    <Square />
                    <Square />
                </View>
                {/* <View style={styles.container}>
                    <Square />
                    <Square />
                    <Square />
                </View>
                <View style={styles.container}>
                    <Square />
                    <Square />
                    <Square />
                </View> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
})
