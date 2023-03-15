// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?",
      },
      {
        type: 'input',
        name: 'description',
        message: "What is the purpose of this project; what problem does it solve?",
      },
      {
        type: 'input',
        name: 'installation',
        message: "What are the steps to installing your project?",
      },
      {
        type: 'input',
        name: 'usage',
        message: "How is your application used?",
      },
      {
        type: 'input',
        name: 'contributing',
        message: "Who contributed to this project?",
      },
      {
        type: 'input',
        name: 'tests',
        message: "How can users test this application?",
      },
      {
        type: 'list',
        message: "Which license will you use for this project?",
        name: 'license',
        choices: ['Apache 2.0 License', 'GNU GPL v3', 'The MIT License'],
      },
      {
        type: 'input',
        name: 'username',
        message: "What is your GitHub username?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
      },
]; writeToFile();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile("README.md", generateMarkdown)
};


// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
};

// Function call to initialize app
init();
