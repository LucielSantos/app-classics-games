import React from 'react';

import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export const Square = (props) => (
    <TouchableOpacity
        style={styles.square}
        onPress={() => props.onPress()}
    >
        <Text style={styles.content}>
            {props.value}
        </Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    square: {
        display: 'flex',
        height: 80,
        width: 80,
        borderWidth: 2,
        borderRadius: 4,
        margin: 4
    },
    content: {
        height: '100%',
        width: '100%',
        backgroundColor: 'red',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
        fontSize: 40
        
    }
})
