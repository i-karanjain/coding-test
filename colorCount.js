const { mainModule } = require("process");
const _ = require("underscore");
//Colors from the question 
const colors = ['red', 'green', 'yellow', 'green', 'red', 'red', 'green', 'red', 'green', 'blue', 'yellow', 'green', 'green', 'red', 'green', 'blue'];

console.log("Color count", _.countBy(colors));