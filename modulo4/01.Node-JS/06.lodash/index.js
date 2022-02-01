const _ = require("lodash");

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];

const newArr = _.union(arr1, arr2);

console.log(newArr);
