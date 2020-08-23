const assignments = require('./public/demo.data.json');
const { create_report } = require('../pkg/ssvm_nodejs_starter_lib.js');

console.time('time')
const result = create_report(assignments, '0.1');
console.timeEnd('time')
console.log(JSON.parse(result));
