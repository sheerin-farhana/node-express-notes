//npm - global command , comes with node
//npm --version => gives you the version of the npm installed


//local dependency - use it only in this particular project
// npm install <packagename>

//global dependency - use it in any project
// npm install -g <packagename>

// package.json - manifest file (stores important info about project/package)
//manual approach (create package.json in the root and create each properties manually)
// npm init (step by step , press ent  er to skip)
//npm init -y(everything default)

const lodash = require('lodash');

const items = [1, [2, [3, [4]]]];

const newItems = lodash.flattenDeep(items);
console.log(newItems);
console.log("hello world");