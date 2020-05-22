// import deepClone from '../src/index'
// console.log('deepclone', deepClone);
const deepClone = require("../src/index");
console.log("deepclone", deepClone);

var a1 = [1, 2, 3];
var a2 = deepClone(a1);

console.log("===", a2, a2[0] === a1[0]);
