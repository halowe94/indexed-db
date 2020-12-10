let inquirer = require("inquirer");
let fs = require("fs");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Give a brief descriptiion of your project",
  },
  {
    type: "input",
    name: "packageName",
    message: "What package needs to be installed? ",
  },
  {
    type: "input",
    name: "packageLink",
    message: "What is the link to the package?",
  },
  {
    type: "input",
    name: "usage",
    message: "What are the usage instructions?",
  },
  {
    type: "input",
    name: "contribution",
    message: "What are your contribution guidelines?",
  },
  {
    type: "input",
    name: "licenseName",
    message: "What is the name of your license?",
  },
  {
    type: "input",
    name: "licenseURL",
    message: "what is the license URL?",
  },
  {
    type: "input",
    name: "test",
    message: "Do you have any tests to include?",
  },
  {
    type: "input",
    name: "username",
    message: "What is your github username?",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  //data is the response object containing the responses toa ll of the user questions
  inquirer.prompt(questions).then(function (data) {
    let filename = "README.md";

    let readMeTemplate = `
# ${data.title}
## Description
${data.description}
# Table of Contents
* [Description](#Description)
* [Table of Contents](#Table-Of-Contents)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [License](#License)
* [Tests](#Tests)
## Installation
Use the package manager [${data.packageName}](${data.packageLink}) to install ${data.packageName}.
\`\`\`bash
npm install
\`\`\`
## Usage
\`\`\`${data.packageName}
import ${data.packageName}
${data.usage}
\`\`\`
## Contributing
${data.contribution}
## License
[${data.licenseName}](${data.licenseURL})
## Tests
${data.test}
## Questions
For more info, click here:
https://github.com/${data.username}`;

    fs.writeFile(filename, readMeTemplate, function (err) {
      if (err) {
        console.log(err);
      }
      console.log("you created a README file!!!");
    });
  });
}

// function call to initialize program
init();
