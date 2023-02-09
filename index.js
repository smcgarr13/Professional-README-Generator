// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
  },
  {
    type: "input",
    name: "table of contents",
    message: "What is the table of contents for your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "How would the user install this project/application?",
  },
  {
    type: "input",
    name: "usage",
    message: "How would the user use this project/application?",
  },
  {
    type: "list",
    name: "license",
    message: "What license does your project use?",
    choices: ["apache", "MIT", "ISC", "none"],
  },
  {
    type: "input",
    name: "contributing",
    message: "How would the user contribute to this project/application?",
  },
  {
    type: "input",
    name: "tests",
    message: "What tests have you done on your project?",
  },
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("The file ${fileName} was saved!");
  });
}

// TODO: Create a function to initialize app
function init() {
  console.log("Initializing Application...");
  // Initialize application code here

  inquirer
    .prompt(questions)
    .then((answers) => {
      // Use user feedback for... whatever!!
      writeToFile("readme.md", generateMarkdown(answers));
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
  console.log("application initialized successfully!");
}

// Function call to initialize app
init();
