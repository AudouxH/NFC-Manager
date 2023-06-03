import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ndef } from 'react-native-nfc-manager';
import readNfcTag from '../components/ReadNFCTag';

const ReaderScreen = ({ isNfcSupported, isNfcEnable }) => {
    const [isScanned, setIsScanned] = useState(false);
    const [canMakeReadOnly, setCanMakeReadOnly] = useState(false);
    const [nfcID, setNfcID] = useState("");
    const [isWritable, setIsWritable] = useState(false);
    const [maxSize, setMaxSize] = useState(0);
    const [NFCtype, setNFCType] = useState("");
    const [techTypes, setTechTypes] = useState([]);
    const [textData, setTextData] = useState("");
    const [uriData, setUriData] = useState("");

    useEffect(() => {
        const lunchNFCReading = async () => {
            if (isNfcSupported && isNfcEnable) {
                setIsScanned(false);
                const { canMakeReadOnly, id, isWritable, maxSize, ndefMessage, type, techTypes } = await readNfcTag();

                canMakeReadOnly && setCanMakeReadOnly(canMakeReadOnly);
                id && setNfcID(id);
                isWritable && setIsWritable(isWritable);
                maxSize && setMaxSize(maxSize);
                type && setNFCType(type);
                techTypes && setTechTypes(techTypes);
                ndefMessage && ndefMessage.map((message) => {
                    const { payload } = message;
                    console.log("message type:", message.type[0]);

                    if (message.type[0] === 85) {
                        setUriData(Ndef.uri.decodePayload(payload));
                    } else if (message.type[0] === 84) {
                        setTextData(Ndef.text.decodePayload(payload));
                    }
                });
                setIsScanned(true);
            }
        }
        lunchNFCReading();
    }, [isNfcSupported, isNfcEnable]);

    return (
        <View style={styles.view}>
            {(isNfcSupported && isNfcEnable) ?
                isScanned ?
                    <View>
                        <Text>canMakeReadOnly: {canMakeReadOnly ? "true" : "false"}</Text>
                        <Text>Tag ID: {nfcID}</Text>
                        <Text>isWritable: {isWritable ? "true" : "false"}</Text>
                        <Text>Max Size: {maxSize}</Text>
                        <Text>type: {NFCtype}</Text>
                        <Text>techTypes:</Text>
                        {techTypes && techTypes.map((type, index) => {
                            return (
                                <Text key={index}>- {type}</Text>
                            )
                        })}
                        <Text>tag text data: {textData}</Text>
                        <Text>tag uri data: {uriData}</Text>
                    </View>
                    :
                    <View>
                        <Text>Reading in progress</Text>
                    </View>
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