import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NfcManager, { NfcTech, Ndef } from 'react-native-nfc-manager';

NfcManager.start();

const WriterScreen = ({ isNfcSupported, isNfcEnable }) => {
    const [isWrote, setIsWrote] = useState(false);

    useEffect(() => {
        const writeOnNfcTag = async () => {
            try {
                setIsWrote(false);
                await NfcManager.requestTechnology(NfcTech.Ndef);
                const bytes = Ndef.encodeMessage([Ndef.uriRecord('www.testOfUri.com'), Ndef.textRecord('test of text')]);
                if (bytes) {
                    await NfcManager.ndefHandler.writeNdefMessage(bytes);
                }
                console.warn('Tag wrote');
            } catch (ex) {
                console.warn(ex);
            } finally {
                NfcManager.cancelTechnologyRequest();
                setIsWrote(true);
            }
        }

        if (isNfcSupported && isNfcEnable) {
            writeOnNfcTag();
        }
    }, [isNfcSupported, isNfcEnable])

    return (
        <View style={styles.view}>
            {(isNfcSupported && isNfcEnable) ?
                isWrote ? 
                <View>
                    <Text>Tag write success</Text>
                </View>
                :
                <View>
                    <Text>Writing in progress</Text>
                </View>
                :
                <Text>NFC not supported</Text>
            }
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

export default WriterScreen;