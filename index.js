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

const licenseBadges = {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    Apache: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    GPL: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    BSD: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    None: ""
};


const generateReadme = (answers) => `
# ${answers.title}

${licenseBadges[answers.license]}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${answers.license !== 'None' ? '- [License](#license)' : ''}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

${answers.license !== 'None' ? `## License
This project is licensed under the ${answers.license} license.` : ''}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions about the project, you can reach out to me at:
- GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
- Email: [${answers.email}](mailto:${answers.email})
`;



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error("Error writing to file", err);
            return;
        }
            console.log('File written successfully!');
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateReadme(answers);
        writeToFile('README.md', readmeContent);
    }).catch((err) => {
        console.error("Error with inquirer prompt", err);
    });
}

// Function call to initialize app
init();
