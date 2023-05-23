import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import NfcManager from 'react-native-nfc-manager';

const HomeScreen = ({ navigation, isNfcSupported, isNfcEnable, setIsNfcSupported }) => {

    return (
        isNfcEnable && isNfcSupported ?
            <View style={styles.view}>
                <Text style={styles.title}>NFC-Manager Home</Text>
                <View style={styles.options}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Reader')}>
                        <Text style={styles.text}>Read a NFC Tag</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Writer')}>
                        <Text style={styles.text}>Write on a NFC Tag</Text>
                    </TouchableOpacity>
                </View>
            </View>
            :
            <View style={styles.view}>
                <Text style={styles.title}>Please enable NFC</Text>
                <View style={styles.options}>
                    <TouchableOpacity style={styles.button} onPress={() => NfcManager.goToNfcSetting()}>
                        <Text style={styles.text}>Go to settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setIsNfcSupported(false)}>
                        <Text style={styles.text}>Reload</Text>
                    </TouchableOpacity>
                </View>
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