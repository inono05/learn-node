const lodash = require('lodash');
const names = ['idriss', 'john', 'jane', 'doe'];

const capitalizedNames = lodash.map(names, lodash.capitalize);
console.log(capitalizedNames);