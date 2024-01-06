// const fs = require('fs');

// const fName = 'test4.xls'; // Replace with the way you get file name in Node.js context
// const BOF = 0x0809; // Constant for BOF
// const EOF = 0x000a; // Constant for EOF

// function getByteHex(byte) {
//   return byte.toString(16).padStart(2, '0').toUpperCase();
// }

// function getUInt16Hex(uint16) {
//   return uint16.toString(16).padStart(4, '0').toUpperCase();
// }

// if (!fName) {
//   return;
// }

// // Read XLS file
// try {
//   const fStream = fs.openSync(fName, 'r');
//   const fileSize = fs.statSync(fName).size;
//   let bFindBOF = true;
//   let offset = 0;

//   while (offset < fileSize - 1) {
//     if (bFindBOF) {
//       // Get BOF Record
//       while (offset < fileSize - 3 && bFindBOF) {
//         const buffer = Buffer.alloc(2);
//         fs.readSync(fStream, buffer, 0, 2, offset);
//         const uBuffer = buffer.readUInt16LE();

//         if (uBuffer === BOF) {
//           // BOF = 0x0809
//           bFindBOF = false;
//           console.log('ID = 0x0809 | ');
//         }
//         offset += 2;
//       }

//       if (!bFindBOF) {
//         // Get Record Length
//         const lengthBuffer = Buffer.alloc(2);
//         fs.readSync(fStream, lengthBuffer, 0, 2, offset);
//         const recordLength = lengthBuffer.readUInt16LE();
//         console.log(`Length = ${recordLength} | Offset = ${offset}`);
//         offset += 2;

//         // Get Record Body
//         if (recordLength > 0) {
//           console.log(' | Body = ');
//           const bodyBuffer = Buffer.alloc(recordLength);
//           fs.readSync(fStream, bodyBuffer, 0, recordLength, offset);
//           for (let i = 0; i < recordLength; i++) {
//             console.log(`${getByteHex(bodyBuffer[i])} | `);
//           }
//         }
//         console.log('<br/>');
//         offset += recordLength;
//       } else {
//         offset += 2;
//       }
//     } else {
//       // Get Record ID
//       const idBuffer = Buffer.alloc(2);
//       fs.readSync(fStream, idBuffer, 0, 2, offset);
//       const uBuffer = idBuffer.readUInt16LE();

//       if (uBuffer === EOF) {
//         // EOF = 0x000A
//         bFindBOF = true;
//       }
//       console.log(`ID = ${getUInt16Hex(uBuffer)} | `);
//       offset += 2;

//       // Get Record Length
//       const lengthBuffer = Buffer.alloc(2);
//       fs.readSync(fStream, lengthBuffer, 0, 2, offset);
//       const recordLength = lengthBuffer.readUInt16LE();
//       console.log(`Length = ${recordLength} | Offset = ${offset}`);
//       offset += 2;

//       // Get Record Body
//       if (recordLength > 0) {
//         console.log(' | Body = ');
//         const bodyBuffer = Buffer.alloc(recordLength);
//         fs.readSync(fStream, bodyBuffer, 0, recordLength, offset);
//         for (let i = 0; i < recordLength; i++) {
//           console.log(`${getByteHex(bodyBuffer[i])} | `);
//         }
//       }
//       console.log('<br/>');
//       offset += recordLength;
//     }
//   }

//   console.log(
//     '*ID and LENGTH take 4 bytes, so total bytes per record is 4 + Length.'
//   );
//   fs.closeSync(fStream);
// } catch (ex) {
//   console.error('xls-check::Page_Load: exception: ', ex.message, ex.stack);
// }
const fs = require('fs');

const fName = 'test5.xls'; // Replace with your file name

const startOffset = 2048;
const byteSize = 2719;

try {
  const fStream = fs.openSync(fName, 'r');
  const buffer = Buffer.alloc(byteSize);

  // Read bytes from the specified offset
  fs.readSync(fStream, buffer, 0, byteSize, startOffset);

  // Interpret the buffer as ASCII string
  const asciiString = buffer.toString('ascii');

  console.log('Data interpreted as ASCII string:');
  console.log(asciiString);

  fs.closeSync(fStream);
} catch (ex) {
  console.error('Error reading file:', ex.message);
}
