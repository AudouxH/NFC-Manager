// const password = [0x1, 0x2, 0x3, 0x4];
// const resp = await NfcManager.transceive([0x30]);
// console.log("responce:", resp);

// const response = await NfcManager.transceive([
//     0x30, // READ
//     0x29 & 0x0ff, // PAGE 41
// ]);
// console.log("responce:", response);

// const response39 = await NfcManager.transceive([
//     0x30, // READ
//     39 // PAGE 39
// ]);
// console.log("responce:", response39);

// const write = await NfcManager.transceive([
//     0xA2, // WRITE
//     0x29 & 0x0ff,   // PAGE 41
//     // (0 & 0x0ff), // disable protection
//     // response
// ]);
// console.log("write", write);

// const auth = await NfcManager.transceive([
//     0x1B, //command for PWD_AUTH
//     0x1,
//     0x2,
//     0x3,
//     0x4
// ]);
// console.log("responce:", auth);

// Set PWD (page 39) to your desired password (default value is 0xFFFFFFFF).
// const writePassword = await NfcManager.transceive([
//     0xA2, // WRITE
//     39,   // page address
//     password[0], password[1], password[2], password[3]
// ]);
// console.log("responce:", writePassword);


// Set PACK (page 40, bytes 0-1) to your desired password acknowledge (default value is 0x0000).
// const writeNewPassword = await NfcManager.transceive([
//     0xA2, // WRITE
//     40,   // page address
//     pack[0], pack[1],   // bytes 0-1 are PACK value
//     0, 0  // other bytes are RFU and must be written as 0
// ]);

// Set AUTHLIM (page 38, byte 0, bits 2-0) to the maximum number of failed password verification attempts (setting this value to 0 will permit an unlimited number of PWD_AUTH attempts).

// Set PROT (page 38, byte 0, bit 7) to your desired value (0 = PWD_AUTH in needed only for write access, 1 = PWD_AUTH is necessary for read and write access).
// const page38 = await NfcManager.transceive([
//     0x30, // READ
//     38    // page address
// ]);

// if ((page38 != null) && (page38.length >= 16)) {  // read always returns 4 pages
//     const prot = false;  // false = PWD_AUTH for write only, true = PWD_AUTH for read and write
//     const authlim = 0; // value between 0 and 7
//     const getPage38 = await NfcManager.transceive([
//         0xA2, // WRITE
//         38,   // page address
//         // (byte) ((page38[0] & 0x078) | (prot ? 0x080 : 0x000) | (authlim & 0x007)),
//         ((page38[0] & 0x078) | (prot ? 0x080 : 0x000) | (authlim & 0x007)),
//         page38[1], page38[2], page38[3]  // keep old value for bytes 1-3, you could also simply set them to 0 as they are currently RFU and must always be written as 0 (response[1], response[2], response[3] will contain 0 too as they contain the read RFU value)
//     ]);
// }

// Set AUTH0 (page 37, byte 3) to the first page that should require password authentication.
// const page37 = await NfcManager.transceive([
//     0x30, // READ
//     37    // page address
// ]);

// if ((page37 != null) && (page37.length >= 16)) {  // read always returns 4 pages
//     const prot = false;  // false = PWD_AUTH for write only, true = PWD_AUTH for read and write
//     const auth0 = 0; // first page to be protected, set to a value between 0 and 37 for NTAG212
//     const getPage37 = await NfcManager.transceive([

//         0xA2, // WRITE
//         37,   // page address
//         response[0], // keep old value for byte 0
//         response[1], // keep old value for byte 1
//         response[2], // keep old value for byte 2
//         // (byte) (auth0 & 0x0ff)
//         (auth0 & 0x0ff)
//     ]);
// }

// const page = await NfcManager.transceive([
//     0x30, // READ
//     37, // page address
// ]);
// console.log("responce:", page);

// const auth = await NfcManager.transceive([
//     0x1B, //command for PWD_AUTH
//     response[0],
//     response[1],
//     response[2],
//     response[3]
// ]);
// console.log("responce:", auth);


// const resp = await NfcManager.transceive([
//     0xa2, // WRITE
//     0x29, // PAGE 41
//     [4, 0, 0, 255, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// ]);
// console.log("resp:", resp);

// if (response != null && response.length >= 16) {
//     // read always returns 4 pages
//     const response = NfcManager.transceive([
//         0xa2, // WRITE
//         0x29, // PAGE 41
//         response[0], // keep old value for byte 0
//         response[1], // keep old value for byte 1
//         response[2], // keep old value for byte 2
//         0x0ff, // disable protection
//     ]);
// }

// get error when try to getBackgroundNdef();
// const NdefBackground = await NfcManager.getBackgroundNdef();
// get error when try to getBackgroundNdef();
// const maxTransceiveLength = await NfcManager.getMaxTransceiveLength();

// Change isWritable to false and it's actually not possible to change data again
// await NfcManager.ndefHandler.makeReadOnly();