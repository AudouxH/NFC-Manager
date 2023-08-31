# NFC-Manager

Personal Hackathon: React Native Application for NFC Reading and Writing

## List of Functionalities
- Reading an NFC Tag to retrieve comprehensive information.
- Writing on an NFC Tag for maximum personalization.
- Enhancing the security of NFC Tags by setting a password and implementing password requirements.

## NFC Security Implementation

In this project, I've harnessed the power of the `react-native-nfc-manager` package to take NFC tag security to the next level. Specifically, I've focused on NTAG 215 memory tags and the process of securing them:

### Setting a Password
By utilizing the capabilities of the `react-native-nfc-manager` package, I've successfully integrated a mechanism to set a password on NTAG 215 memory tags. This added layer of security ensures that only authorized individuals can access and modify the data stored on the tag.

### Password Requirements
To further strengthen the security measures, I've implemented password requirements before allowing any writing operation on the NTAG 215 tag. This ensures that only users who meet the specific password criteria can make modifications, preventing unauthorized or accidental changes.

## Getting Started with the Project
- [ ] Clone the repository: `git clone [git@github.com:AudouxH/NFC-Manager.git](https://github.com/AudouxH/NFC-Manager.git)`
- [ ] Install all necessary packages: `npm install` || `yarn install`
- [ ] Run the package manager: `npm start` || `yarn start`
- [ ] Launch the React Native application: `yarn android` || `yarn ios`

## List of Sources

### Icons
- App Icon: [Mobile Pay Icon](https://www.flaticon.com/free-icon/mobile-pay_5227628?term=nfc&page=1&position=27&origin=search&related_id=5227628)

### Packages
- React Native NFC Manager: [npm Package](https://www.npmjs.com/package/react-native-nfc-manager)
- React Native Navigation: [npm Package](https://www.npmjs.com/package/@react-navigation/native)
- React Native Icons: [npm Package](https://www.npmjs.com/package/react-native-vector-icons)
