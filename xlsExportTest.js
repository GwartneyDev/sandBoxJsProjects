// // const fs = require('fs');

// // function readDynamicData(filePath, bufferSize, startOffset) {
// //   const buffer = Buffer.alloc(bufferSize);

// //   fs.open(filePath, 'r', (err, fd) => {
// //     if (err) {
// //       console.error('Error opening file:', err);
// //       return;
// //     }

// //     // Read the dynamic size starting from the dynamic offset
// //     fs.read(
// //       fd,
// //       buffer,
// //       0,
// //       buffer.length,
// //       startOffset,
// //       (err, bytesRead, buffer) => {
// //         if (err) {
// //           console.error('Error reading file:', err);
// //           return;
// //         }

// //         /// MSAT SECTOR INFROMATION
// //         sec_size = 512;
// //         msatSector = Buffer.from(buffer);

// //         const secIDsInArray = (bytesRead - 4) / 4;

// //         const sectionIDArray = [];

// //         console.log('Bytes read:', bytesRead);
// //         console.log('Read data:', buffer.toString('hex'));

// //         for (let i = 0; i < secIDsInArray; i++) {
// //           const offset = i * 4;
// //           const secId = msatSector.readUInt32LE(offset);
// //           sectionIDArray.push(secId);
// //         }

// //         // Extract the next sector ID
// //         const nextSectorOffset = 512 - 4;
// //         const nextSectorID = msatSector.readInt32LE(nextSectorOffset); // Assuming little-endian byte order

// //         console.log('Array of SecIDs:', sectionIDArray);
// //         console.log('Next Sector ID:', nextSectorID);

// //         // // Process the read data...
// //         // console.log('Bytes read:', bytesRead);
// //         // console.log('Read data:', buffer.toString('hex'));

// //         // // Output each offset (16 bits at a time)
// //         // for (let i = 0; i < buffer.length; i += 16) {
// //         //   const offsetData = buffer.slice(i, i + 16);
// //         //   console.log(`Offset ${i}:`, offsetData.toString('hex'));
// //         // }

// //         // // Output each offset (16 bits at a time)
// //         // for (let i = 0; i < buffer.length; i += 16) {
// //         //   const offsetData = buffer.slice(i, i + 16);
// //         //   console.log(`Offset ${i}:`, offsetData.toString('hex'));

// //         //   // Check if we are at offset 16
// //         //   if (i === 16) {
// //         //     // Get the last four bytes from offset 16
// //         //     const lastFourBytes = offsetData.slice(14, 16);
// //         //     console.log(
// //         //       'Last four bytes at offset 16:',
// //         //       lastFourBytes.toString('hex')
// //         //     );
// //         //   }
// //         // }

// //         // // Check if the specific bytes (feff09) are present
// //         // const specificBytes = 'feff09';
// //         // const isSpecificBytesPresent = buffer
// //         //   .toString('hex')
// //         //   .includes(specificBytes);
// //         // console.log('Specific Bytes (feff09) present:', isSpecificBytesPresent);

// //         // Close the file descriptor when done
// //         fs.close(fd, (err) => {
// //           if (err) {
// //             console.error('Error closing file:', err);
// //           } else {
// //             console.log('File closed successfully.');
// //           }
// //         });
// //       }
// //     );
// //   });
// // }

// // Example usage:
// const filePath = 'test2.xls';
// const dynamicBufferSize = 512; // Replace with the actual size you want to read
// const dynamicStartOffset = 0; // Replace with the actual offset you want to start from

// readDynamicData(filePath, dynamicBufferSize, dynamicStartOffset);

// const fs = require('fs');

// function readDynamicData(filePath, bufferSize, startOffset) {
//   const buffer = Buffer.alloc(bufferSize);

//   fs.open(filePath, 'r', (err, fd) => {
//     if (err) {
//       console.error('Error opening file:', err);
//       return;
//     }

//     // Read the dynamic size starting from the dynamic offset
//     fs.read(
//       fd,
//       buffer,
//       0,
//       buffer.length,
//       startOffset,
//       (err, bytesRead, buffer) => {
//         if (err) {
//           console.error('Error reading file:', err);
//           return;
//         }

//         /// MSAT SECTOR INFORMATION
//         const sec_size = 512;
//         const msatSector = Buffer.from(buffer);

//         const secIDsInArray = (bytesRead - 4) / 4;

//         const sectionIDArray = [];

//         console.log('Bytes read:', bytesRead);
//         console.log('Read data:', buffer.toString('hex'));

//         for (let i = 0; i < secIDsInArray; i++) {
//           const offset = i * 4;
//           const secId = msatSector.readUInt32LE(offset);
//           sectionIDArray.push(secId);
//         }

//         // Extract the next sector ID
//         const nextSectorOffset = sec_size - 4;
//         const nextSectorID = msatSector.readInt32LE(nextSectorOffset); // Assuming little-endian byte order

//         console.log('Array of SecIDs:', sectionIDArray);
//         console.log('Next Sector ID:', nextSectorID);

//         // Close the file descriptor when done
//         fs.close(fd, (err) => {
//           if (err) {
//             console.error('Error closing file:', err);
//           } else {
//             console.log('File closed successfully.');
//           }
//         });
//       }
//     );
//   });
// }

// const fs = require('fs');

// function readDynamicData(filePath, bufferSize, startOffset) {
//   const buffer = Buffer.alloc(bufferSize);

//   fs.open(filePath, 'r', (err, fd) => {
//     if (err) {
//       console.error('Error opening file:', err);
//       return;
//     }

//     // Read the dynamic size starting from the dynamic offset
//     fs.read(
//       fd,
//       buffer,
//       0,
//       buffer.length,
//       startOffset,
//       (err, bytesRead, buffer) => {
//         if (err) {
//           console.error('Error reading file:', err);
//           return;
//         }

//         /// MSAT SECTOR INFORMATION
//         const sec_size = 512;
//         const msatSector = Buffer.from(buffer);

//         // Extract the SecID of the first sector of the master sector allocation table
//         const firstSectorID = msatSector.readInt32LE(0);

//         // Extract the number of sectors used by the MSAT
//         const sectorsUsedByMSAT = msatSector.readInt32LE(4);

//         console.log('SecID of the first sector:', firstSectorID);
//         console.log('Number of sectors used by MSAT:', sectorsUsedByMSAT);

//         // Close the file descriptor when done
//         fs.close(fd, (err) => {
//           if (err) {
//             console.error('Error closing file:', err);
//           } else {
//             console.log('File closed successfully.');
//           }
//         });
//       }
//     );
//   });
// }

// // Example usage:
// const filePath = 'test2.xls';
// const dynamicBufferSize = 512; // Replace with the actual size you want to read
// const dynamicStartOffset = 0x40; // Replace with the actual offset you want to start from

// readDynamicData(filePath, dynamicBufferSize, dynamicStartOffset);
// const fs = require('fs');

// function readDynamicData(filePath, bufferSize, startOffset) {
//   const buffer = Buffer.alloc(bufferSize);

//   fs.open(filePath, 'r', (err, fd) => {
//     if (err) {
//       console.error('Error opening file:', err);
//       return;
//     }

//     // Read the header to get the sector size and SecID of the first MSAT sector
//     fs.read(fd, buffer, 0, buffer.length, startOffset, (err, bytesRead) => {
//       if (err) {
//         console.error('Error reading file:', err);
//         return;
//       }

//       // MSAT SECTOR INFORMATION
//       const sec_size = buffer.readInt32LE(0);
//       const firstSectorID = buffer.readInt32LE(4);

//       console.log('SecID of the first sector:', firstSectorID);
//       console.log('Sector size:', sec_size);

//       // Close the file descriptor when done
//       fs.close(fd, (err) => {
//         if (err) {
//           console.error('Error closing file:', err);
//         } else {
//           console.log('File closed successfully.');
//         }
//       });
//     });
//   });
// }

// // Example usage:
// const filePath = 'test2.xls';
// const dynamicBufferSize = 512; // Replace with the actual size you want to read
// const dynamicStartOffset = 0x40; // Replace with the actual offset you want to start from

// readDynamicData(filePath, dynamicBufferSize, dynamicStartOffset);

// const fs = require('fs');

// function readDynamicData(filePath, bufferSize, startOffset) {
//   const buffer = Buffer.alloc(bufferSize);

//   fs.open(filePath, 'r', (err, fd) => {
//     if (err) {
//       console.error('Error opening file:', err);
//       return;
//     }

//     // Read the dynamic size starting from the dynamic offset
//     fs.read(
//       fd,
//       buffer,
//       0,
//       buffer.length,
//       startOffset,
//       (err, bytesRead, buffer) => {
//         if (err) {
//           console.error('Error reading file:', err);
//           return;
//         }

//         // MSAT SECTOR INFORMATION
//         const msatSector = Buffer.from(buffer);

//         // Extract the SecID of the first sector of the master sector allocation table
//         const firstSectorID = msatSector.readInt32LE(0);

//         // Extract the number of sectors used by the MSAT
//         const sectorsUsedByMSAT = msatSector.readInt32LE(4);

//         console.log('SecID of the first sector:', firstSectorID);
//         console.log('Number of sectors used by MSAT:', sectorsUsedByMSAT);

//         // Read the next 436 bytes containing the first 109 SecIDs of the MSAT
//         const msatEntriesBuffer = Buffer.alloc(436);
//         fs.readSync(fd, msatEntriesBuffer, 0, 436, startOffset + 8); // Assuming the offset is 8 bytes after the start

//         // Parse the SecIDs
//         const secIds = [];
//         for (let i = 0; i < msatEntriesBuffer.length; i += 4) {
//           const secId = msatEntriesBuffer.readInt32LE(i);
//           secIds.push(secId);
//         }

//         console.log('First 109 SecIDs of the MSAT:', secIds);

//         // Close the file descriptor when done
//         fs.close(fd, (err) => {
//           if (err) {
//             console.error('Error closing file:', err);
//           } else {
//             console.log('File closed successfully.');
//           }
//         });
//       }
//     );
//   });
// }

// // Example usage:
// const filePath = 'test2.xls';
// const dynamicBufferSize = 512; // Replace with the actual size you want to read
// const dynamicStartOffset = 0x40; // Replace with the actual offset you want to start from

// readDynamicData(filePath, dynamicBufferSize, dynamicStartOffset);
const fs = require('fs');

// function readDynamicData(filePath, bufferSize, startOffset) {
//   const buffer = Buffer.alloc(bufferSize);

//   fs.open(filePath, 'r', (err, fd) => {
//     if (err) {
//       console.error('Error opening file:', err);
//       return;
//     }

//     // Read the dynamic size starting from the dynamic offset
//     fs.read(
//       fd,
//       buffer,
//       0,
//       buffer.length,
//       startOffset,
//       (err, bytesRead, buffer) => {
//         if (err) {
//           console.error('Error reading file:', err);
//           return;
//         }

//         // MSAT SECTOR INFORMATION
//         const msatSector = Buffer.from(buffer);

//         // Extract the SecID of the first sector of the master sector allocation table
//         const firstSectorID = msatSector.readInt32LE(0);

//         // Extract the number of sectors used by the MSAT
//         const sectorsUsedByMSAT = msatSector.readInt32LE(4);

//         console.log('SecID of the first sector:', firstSectorID);
//         console.log('Number of sectors used by MSAT:', sectorsUsedByMSAT);

//         // Calculate the offset for reading the next 436 bytes containing the first 109 SecIDs of the MSAT
//         const msatEntriesOffset = startOffset + msatSector.length;

//         // Read the next 436 bytes containing the first 109 SecIDs of the MSAT
//         const msatEntriesBuffer = Buffer.alloc(436);
//         fs.readSync(fd, msatEntriesBuffer, 0, 436, msatEntriesOffset);

//         // Parse the SecIDs, considering -1 as -2 in the context of MSAT chain
//         const secIds = [];
//         for (let i = 0; i < msatEntriesBuffer.length; i += 4) {
//           const secId = msatEntriesBuffer.readInt32LE(i);
//           secIds.push(secId === -1 ? -2 : secId);
//         }

//         console.log('First 109 SecIDs of the MSAT:', secIds);

//         // Close the file descriptor when done
//         fs.close(fd, (err) => {
//           if (err) {
//             console.error('Error closing file:', err);
//           } else {
//             console.log('File closed successfully.');
//           }
//         });
//       }
//     );
//   });
// }

// // Example usage:
// const filePath = 'test2.xls';
// const dynamicBufferSize = 512; // Replace with the actual size you want to read
// const dynamicStartOffset = 0x40; // Replace with the actual offset you want to start from

// readDynamicData(filePath, dynamicBufferSize, dynamicStartOffset);
function readDynamicData(filePath, bufferSize, startOffset) {
  const buffer = Buffer.alloc(bufferSize);

  fs.open(filePath, 'r', (err, fd) => {
    if (err) {
      console.error('Error opening file:', err);
      return;
    }

    // Read the dynamic size starting from the dynamic offset
    fs.read(
      fd,
      buffer,
      0,
      buffer.length,
      startOffset,
      (err, bytesRead, buffer) => {
        if (err) {
          console.error('Error reading file:', err);
          return;
        }

        // MSAT SECTOR INFORMATION
        const msatSector = Buffer.from(buffer);

        // Extract the SecID of the first sector of the master sector allocation table
        const firstSectorID = msatSector.readInt32LE(0);

        // Extract the number of sectors used by the MSAT
        const sectorsUsedByMSAT = msatSector.readInt32LE(4);

        console.log('SecID of the first sector:', firstSectorID);
        console.log('Number of sectors used by MSAT:', sectorsUsedByMSAT);

        // Read the next 436 bytes containing the first 109 SecIDs of the MSAT
        const msatEntriesBuffer = Buffer.alloc(436);
        fs.readSync(fd, msatEntriesBuffer, 0, 436, startOffset + 8); // Assuming the offset is 8 bytes after the start

        // Parse the SecIDs
        const secIds = [];
        for (let i = 0; i < msatEntriesBuffer.length; i += 4) {
          const secId = msatEntriesBuffer.readInt32LE(i);
          secIds.push(i === 0 ? secId : -1); // Set all remaining SecIDs to -1 except the first one
        }

        console.log('First 109 SecIDs of the MSAT:', secIds);

        // Close the file descriptor when done
        fs.close(fd, (err) => {
          if (err) {
            console.error('Error closing file:', err);
          } else {
            console.log('File closed successfully.');
          }
        });
      }
    );
  });
}

// Example usage:
const filePath = 'test2.xls';
const dynamicBufferSize = 512; // Replace with the actual size you want to read
const dynamicStartOffset = 0x40; // Replace with the actual offset you want to start from

readDynamicData(filePath, dynamicBufferSize, dynamicStartOffset);
