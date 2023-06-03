import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EraseScreen = ({ isNfcEnable }) => {

    return (
        <View style={styles.view}>
            {isNfcEnable ? <Text style={styles.text}>Erase a nfc</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    text: {
        color: '#000',
        fontSize: 20,
    }
});

export default EraseScreen;