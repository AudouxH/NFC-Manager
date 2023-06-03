import NfcManager, { NfcTech } from 'react-native-nfc-manager';

NfcManager.start();

const readNfcTag = async () => {
    try {
        await NfcManager.requestTechnology(NfcTech.NfcA);
        const ReadTag = await NfcManager.getTag();
        const ndefHandlerStatus = await NfcManager.ndefHandler.getNdefStatus(); // {"capacity": 137, "status": 2}

        return (ReadTag ? ReadTag : null);
    } catch (error) {
        console.warn('Scan Error', error);
    } finally {
        await NfcManager.cancelTechnologyRequest();
    }
}

export default readNfcTag;