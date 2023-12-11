const fs = require('fs');

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

        // Process the read data...
        console.log('Bytes read:', bytesRead);
        console.log('Read data:', buffer.toString('hex'));

        // Read the last 4 bytes from the buffer
        const last4Bytes = buffer.readUInt32LE(buffer.length - 4);

        // Use the parsed value as needed
        console.log('Last 4 Bytes:', last4Bytes);

        // Check if the specific bytes (feff09) are present
        const specificBytes = 'feff09';
        const isSpecificBytesPresent = buffer
          .toString('hex')
          .includes(specificBytes);
        console.log('Specific Bytes (feff09) present:', isSpecificBytesPresent);

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
const dynamicBufferSize = 20; // Replace with the actual size you want to read
const dynamicStartOffset = 16; // Replace with the actual offset you want to start from

readDynamicData(filePath, dynamicBufferSize, dynamicStartOffset);
