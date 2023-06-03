import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import NfcManager from 'react-native-nfc-manager';
import setting from '../assets/Setting.png';
import logo from '../assets/logo.png';

const HomeScreen = ({ navigation, isNfcEnable, isNfcSupported, setIsNfcSupported }) => {
    isNfcSupported ? NfcManager.start() : null;

    return (
        isNfcSupported ?
            <View style={styles.view}>
                <View style={styles.title_container}>
                    <Image source={logo} alt='' style={styles.title_image} />
                    <Text style={styles.title}>NFC-Manager</Text>
                </View>
                <View style={styles.options}>
                    {isNfcEnable ?
                        <>
                            <Text>Read, Write, Copy and Erase your NFC Tag using NFC Manager.</Text>
                            <Text>Secure and easy to use !</Text>
                            <TouchableOpacity style={styles.button} onPress={() => {
                                isNfcEnable ? navigation.navigate('Reader') : null;
                            }}>
                                <Text style={styles.text}>Read</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button} onPress={() => {
                                isNfcEnable ? navigation.navigate('Writer') : null;
                            }}>
                                <Text style={styles.text}>Write</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button} onPress={() => {
                                isNfcEnable ? navigation.navigate('Copy') : null;
                            }}>
                                <Text style={styles.text}>Copy</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button} onPress={() => {
                                isNfcEnable ? navigation.navigate('Erase') : null;
                            }}>
                                <Text style={styles.text}>Erase</Text>
                            </TouchableOpacity>
                        </>
                        :
                        <>
                            <Text style={styles.description}>NFC technology is not enable on your phone. Please go to your NFC phone setting to activate it.</Text>
                            <TouchableOpacity style={styles.button} onPress={async () => {
                                NfcManager.goToNfcSetting();
                            }}>
                                <Image source={setting} alt='' style={styles.button_image} />
                                <Text style={styles.text}>Go to NFC settings</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={async () => {
                                setIsNfcSupported(false);
                            }}>
                                <Text style={styles.text}>Reload</Text>
                            </TouchableOpacity>
                        </>
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    button: {
        width: '80%',
        height: 50,
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginVertical: 10,
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
    title_container: {
        width: '100%',
        height: '12%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        color: '#000',
        textAlign: 'center',
        fontWeight: '700',
    },
    title_image: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    description: {
        color: '#000',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
        width: '90%',
    },
    options: {
        width: '100%',
        height: '88%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button_image: {
        width: 30,
        height: 30,
        marginRight: 10
    }
});

export default HomeScreen;