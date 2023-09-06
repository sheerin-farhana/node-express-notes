//streams => used to read and write data sequentially

// types of streams in node
// 1. writeable => used to write data sequentially
// 2. readable => used to read data sequentially
// 3. Duplex => to both read and write data sequentially
// 4. transform => data can be modified when writing or reading

// Streams also like http, emit EVENTEMITTER Class

// A good example is using streams to read files => if the file is bigger its a good way to use streams

// SETUP

const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt');
//now the default buffer sixe is 90000;

// default size of the buffer -> 64kb {you can change in in the code by passing another object as an argument to the createReadStream method see above for eg }
// last buffer = remainder;
//highWaterMarl - control buffer size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 });
//const stream = createReadStream('./content/big.txt', { encoding :'utf-8' }); -> to read data with the encoding so you see letters and not bytes

 // listening to data event
stream.on('data', (result) => {
    console.log(result);
});

stream.on('error',(err) => console.log(err));

// now we are reading data in chunks 



