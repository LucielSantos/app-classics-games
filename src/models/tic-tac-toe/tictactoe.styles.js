import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    boxSquare: {
        backgroundColor: 'lightgray',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 40
    },
    botao: {
        height: 80,
        width: 80,
        borderWidth: 1,
        margin: 4
    },
    outroBotao: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 120,
        borderWidth: 1,
        borderRadius: 4
    },
    teste: {
        display: 'flex',
        justifyContent: 'center',
        margin: 40
    }
})

export default styles