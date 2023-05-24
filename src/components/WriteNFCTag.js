import NfcManager, { NfcTech, Ndef } from 'react-native-nfc-manager';

NfcManager.start();

const writeOnNfcTag = async () => {
    try {
        await NfcManager.requestTechnology(NfcTech.Ndef);
        const bytes = Ndef.encodeMessage([Ndef.uriRecord('www.nouveauTestURI.com'), Ndef.textRecord('nouveau test of text')]);
        if (bytes) {
            await NfcManager.ndefHandler.writeNdefMessage(bytes);
        }
        console.warn('Tag wrote');
    } catch (ex) {
        console.warn(ex);
    } finally {
        NfcManager.cancelTechnologyRequest();
    }
}

export default writeOnNfcTag;