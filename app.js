// npm version --version
const _ = require("lodash");
const iteam = [1, [2, [3, [4]]]];
const newItem = _.flattenDeep(iteam);
console.log(newItem);
