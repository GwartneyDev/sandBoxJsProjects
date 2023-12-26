const fs = require('fs');
const filePath = 'test4.xls';

const dynamicBufferSize = 512; // Replace with the actual size you want to read
const dynamicStartOffset = 0x40; // Replace with the actual offset you want to start from

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

        // const msatDirectoryTest = Buffer.alloc(512);
        // fs.readSync(fd, msatDirectoryTest, 0, 512, 0x40); // Assuming the offset is 8 bytes after the

        // const readData = msatDirectoryTest.readInt32LE(8);
        // console.log(readData);

        const Directory = Buffer.alloc(512);
        fs.readSync(fd, Directory, 0, 512, 0x30); // Assuming the offset is 8 bytes after the
        const readDirectory = Directory.readInt32LE(0);
        console.log(readDirectory);

        // // Read the next 436 bytes containing the first 109 SecIDs of the MSAT
        // const msatEntriesBuffer = Buffer.alloc(436);
        // fs.readSync(fd, msatEntriesBuffer, 0, 436, startOffset + 8); // Assuming the offset is 8 bytes after the start

        // // Parse the SecIDs
        // const secIds = [];
        // for (let i = 0; i < msatEntriesBuffer.length; i += 4) {
        //   const secId = msatEntriesBuffer.readInt32LE(i);
        //   secIds.push(i === 0 ? secId : -1); // Set all remaining SecIDs to -1 except the first one
        // }

        // console.log('First 109 SecIDs of the MSAT:', secIds);

        ///READ THE VALUES IN SEC 0;

        // const msatEntriesBuffer2 = Buffer.alloc(512);

        // fs.readSync(fd, msatEntriesBuffer2, 0, 512, 0x200); // Assuming the offset

        // const neSecIid = [];

        // for (let i = 0; i < msatEntriesBuffer2.length; i += 4) {
        //   const secId2 = msatEntriesBuffer2.readInt32LE(i);

        //   neSecIid.push(secId2);
        // }

        // console.log(neSecIid);

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
readDynamicData(filePath, dynamicBufferSize, dynamicStartOffset);
