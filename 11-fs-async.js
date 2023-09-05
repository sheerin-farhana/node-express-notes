// fs module ASync

const { readFile, writeFile } = require('fs');

console.log("start");
readFile('./content/first.txt','utf-8' ,(err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt', `Here is the result : ${first} , ${second}`,{flag:'a'} ,(err,result) => {
            if (err) {
                console.log("error creating file");
                return;
            }
            console.log("done with this task");
        })
    })

});

console.log("starting next task");

