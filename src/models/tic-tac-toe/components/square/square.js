import React from 'react';

import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export const Square = (props) => (
    <TouchableOpacity
        style={props.square}
        onPress={() => props.onPress()}
    >
        <Text style={styles.content}>
            {props.value}
        </Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    
    content: {
        height: '100%',
        width: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 40
    }
})
