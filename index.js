const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
// array of questions for user
const questions = [
{
    type: "input",
    name: "github",
    message: "What is your github username?"
}
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions) // .then function
    // call the function writeToFile using the data that we pass (ie the inquirer responses)
}

// function call to initialize program
init();
