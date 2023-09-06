
// fs module ASync using promises

const { readFile,writeFile } = require('fs').promises;
// const util = require('util');

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)




const start = async () => {
    try {
        const first = await readFile('./content/first.txt','utf-8');
        const second = await readFile('./content/second.txt', 'utf-8');
        await writeFile('./content/result-mind-grenade.txt', `THIS IS AWESOME ${first} ${second}`,{flag:'a'});

        console.log(first,second);
    }
    catch(err) {
        console.log(err);
    }
}

start();


// getText('./content/first.txt')
//     .then((result) => {
//         console.log(result);
//     })
//     .catch(err => console.log(err));


// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 console.log(err);
//                 reject(err);
//             }
//             else {
//                 resolve(data);
//             }
//         });
//     });
// };