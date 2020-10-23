const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
{
    type: "input",
    name: "title",
    message: "What is the name of your Project-Application?"
},
{
    type: "input",
    name: "description",
    message: "Describe the Project-Application."
},
{
    type: "input",
    name: "install",
    message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running?"
    
},
{
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use. Include screenshots as needed."
},
{
    type: "input",
    name: "credits",
    message: "List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well."
},
{
    type: "checkbox",
    name: "license",
    message: "What license do you associate with?",
    choices: [
        "MIT",
        "Microsoft", 
        "Apple"
    ]
},
{
    type: "input",
    name: "language",
    message: "Let's create a badge. Please provide your favorite programming language."
},
{
    type: "input",
    name: "length",
    message: "And also let us know how long you have been working with that programming language?"
},
{
    type: "checkbox",
    name: "color",
    message: "Select a color for your programming language badge!",
    choices: [
        "blue",
        "yellow", 
        "lightgrey"
    ]
}

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((markdown) => {
        console.log(markdown);
        writeToFile("README.md", generateMarkdown(markdown));
    })
}

// function call to initialize program
init();
