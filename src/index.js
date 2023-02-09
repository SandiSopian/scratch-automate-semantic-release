// without using library @actions/core
// const person = process.env.INPUT_PERSON;

// using library @actions/core
const core = require("@actions/core");
const person = core.getInput("person");

console.log(`Hello ${person}!`);
