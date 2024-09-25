// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your project?'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Please provide a description of your project.'
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Please provide installation instructions for your project.'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Please provide usage information for your project.'
    },
    {
        name: 'license',
        type: 'list',
        message: 'Please provide license information for your project.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
    },
    {
        name: 'contributing',
        type: 'input',
        message: 'Please provide contributing information for your project.'
    },
    {
        name: 'tests',
        type: 'input',
        message: 'Please provide test instructions for your project.'
    },
    {
        name: 'githubUsername',
        type: 'input',
        message: 'Please provide your GitHub username.'
    },
    {
        name: 'email',
        type: 'input',
        message: 'Please provide your email address.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {`

`}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
