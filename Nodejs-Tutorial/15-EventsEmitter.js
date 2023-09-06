const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name,id) => {
    console.log(`data received user ${name} with id: ${id} `);
});

customEmitter.on('response', () => {
    console.log(`some other logic here`);
});

customEmitter.emit('response','john doe',32); // the order matters => you first listen for the event and then emit it

