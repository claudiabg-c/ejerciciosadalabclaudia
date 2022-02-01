const { add, subtract } = require("./math");

const a = 30;
const b = 8;
const operationAdd = add(a, b);
const operationSubtract = subtract(a, b);

console.log(operationAdd);
console.log(operationSubtract);
