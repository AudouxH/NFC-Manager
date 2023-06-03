import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CopyScreen = ({ isNfcEnable }) => {

    return (
        <View style={styles.view}>
            {isNfcEnable ? <Text style={styles.text}>Copy a nfc</Text> : null}
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

export default CopyScreen;