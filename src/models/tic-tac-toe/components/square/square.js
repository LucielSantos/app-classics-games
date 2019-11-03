import React from 'react';

import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export const Square = (props) => (
    <TouchableOpacity
        style={styles.square}
        onPress={() => props.onPress({ value: 'X' })}
    >
        <Text>
            {props.value}
        </Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    square: {
        height: 80,
        width: 80,
        borderWidth: 1,
        margin: 4
    },
})
