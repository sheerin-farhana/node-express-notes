// Modules - encapsulated code (only share minimum)
//every file in node is a module

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alt-module-syntax');
require('./7-mind-grenade');

sayHi(names.Amy);
sayHi(names.jake);
sayHi('Susan');

