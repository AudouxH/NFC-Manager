import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import NfcManager from 'react-native-nfc-manager';

const HomeScreen = ({ navigation, isNfcEnable, isNfcSupported, setIsNfcSupported }) => {
    isNfcSupported ? NfcManager.start() : null;

    return (
        isNfcSupported ?
            <View style={styles.view}>
                <Text style={styles.title}>NFC-Manager Home</Text>
                <View style={styles.options}>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        isNfcEnable ? navigation.navigate('Reader') : setIsNfcSupported(false);
                    }}>
                        <Text style={styles.text}>Read a NFC Tag</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => {
                        isNfcEnable ? navigation.navigate('Writer') : setIsNfcSupported(false);
                    }}>
                        <Text style={styles.text}>Write on a NFC Tag</Text>
                    </TouchableOpacity>

                    {!isNfcEnable ?
                        <TouchableOpacity style={styles.button} onPress={async () => {
                            NfcManager.goToNfcSetting();
                        }}>
                            <Text style={styles.text}>Go to NFC settings</Text>
                        </TouchableOpacity>
                        : null
                    }
                </View>
            </View>
            :
            <View style={styles.view}>
                <Text style={styles.title}>Your phone doesn't support NFC</Text>
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
    },
    title: {
        width: '100%',
        fontSize: 30,
        color: '#000',
        textAlign: 'center',
    },
    options: {
        width: '100%',
        height: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});

export default HomeScreen;