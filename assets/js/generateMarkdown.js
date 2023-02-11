// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'none'){
    return '';
  }else if (license === 'apache') {
    return `[![OpenFaaS](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.openfaas.com)`;
  } else if (license === 'ISC') {
    return `[![OpenFaaS](https://img.shields.io/badge/License-ISC-blue.svg)](https://www.openfaas.com)`;
  } else if (license === 'MIT') {
    return `[![OpenFaaS](https://img.shields.io/badge/License-MIT-blue.svg)](https://www.openfaas.com)`;
  }
}

// function renderLicenseBadge(license) {
//   if(license == 'none'){
//     return '';
//   }else{
//     return `[![OpenFaaS](https://img.shields.io/badge/${license}-cloud-blue.svg)](https://www.openfaas.com)`;
//   }
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  switch (license) {
    case 'Apache 2.0':
      return 'https://www.apache.org/licenses/LICENSE-2.0';
    case 'ISC':
      return 'https://opensource.org/licenses/ISC';
      case 'MIT':
      return 'https://opensource.org/licenses/MIT';
      case 'none':
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'none') {
    return `## license
    ${license}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}

  ## Table of Contents
  ${data.tableOfContents}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}


  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}


  ## Tests
  ${data.tests}

`;
}

module.exports = generateMarkdown;
