// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./assets/js/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "What is the name of your project?",
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description of your project?',
  },
  {
    type: 'input',
    name: 'tableOfContents',
    message: 'Please list the sections of your Table of Contents, separated by commas:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How would the user install this project/application?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How would the user use this project/application?',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Are there any credits you would like to note?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license does your project use?',
    choices: ['apache', 'ISC', 'MIT', 'none'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How would the user contribute to this project/application?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What tests have you done on your project?'
  },
  {
    type: 'input',
    name: 'GitHub',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Are there any instructions if the user has any additional questions?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address in case the user needs to contact you?'
  },
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('The file ${fileName} was saved!');
  });
}

// TODO: Create a function to initialize app
function init() {
  console.log('Initializing Application...');
  // Initialize application code here

  inquirer
    .prompt(questions)
    .then((answers) => {
      const sections = answers.tableOfContents.split(',');
      let tableOfContents = '';
      for (let i = 0; i < sections.length; i++) {
        tableOfContents += `-[${sections[i].trim()}](#${sections[i].trim().toLowerCase().replace(/\s/g, '-')})\n`
      }
      // Use user feedback for... whatever!!
      writeToFile('readme.md', `## Table of Contents\n\n${tableOfContents}\n\n${generateMarkdown(answers)}`);
      // writeToFile('readme.md', `${generateMarkdown(answers)}\n\n# Table of Contents\n\n${tableOfContents}\n\n`);
      
      // add GitHub info to README
      const readme = generateMarkdown(answers);
      const modifiedReadme = `# Table of Contents\n\n${tableOfContents}\n\n${readme}\n\n## Questions\n\nYou can find me on GitHub at [${answers.GitHub}](https://github.com/${answers.GitHub})\n\n${answers.questions}\n\nEmail: ${answers.email}`;
      writeToFile('readme.md', modifiedReadme);

    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      }else{
        // Something else went wrong
      }
    });
  console.log('application initialized successfully!');
}

// Function call to initialize app
init();
