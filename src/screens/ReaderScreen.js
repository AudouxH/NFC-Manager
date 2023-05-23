import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NfcManager, { NfcTech } from 'react-native-nfc-manager';

NfcManager.start();

const ReaderScreen = ({ isNfcSupported, isNfcEnable }) => {

    useEffect(() => {
        const readNfcTag = async () => {
            try {
                await NfcManager.requestTechnology(NfcTech.Ndef);
                const tag = await NfcManager.getTag();
                console.warn('Tag found', tag);
            } catch (ex) {
                console.warn('Oops!', ex);
            } finally {
                NfcManager.cancelTechnologyRequest();
            }
        }

        if (isNfcSupported && isNfcEnable) {
            readNfcTag();
        }
    }, [isNfcSupported, isNfcEnable])

    return (
        <View style={styles.view}>
            {isNfcSupported && isNfcEnable ?
                <Text>Reading on NFC tag</Text>
                :
                <Text>NFC not supported</Text>
            }
        </View>
    );
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
    button: {
        width: '80%',
        height: 50,
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
    },
    text: {
        color: '#fff',
        fontSize: 20,
    }
});

export default ReaderScreen;