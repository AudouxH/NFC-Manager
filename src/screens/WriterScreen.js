import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import writeOnNfcTag from '../components/WriteNFCTag';

const WriterScreen = ({ isNfcEnable }) => {
    const [isWrote, setIsWrote] = useState(false);

    useEffect(() => {
        const lunchNFCWriting = async () => {
            setIsWrote(false);
            await writeOnNfcTag();
            setIsWrote(true);
        }
        if (isNfcEnable) {
            lunchNFCWriting();
        }
    }, [isNfcEnable])

    return (
        <View style={styles.view}>
            {isNfcEnable ?
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