// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (license === "MIT") {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "APACHE 2.0") {
    badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPL 3.0") {
    badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "BSD 3") {
    badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "None") {
    badge = "";
  }
  return badge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";
  if (license === "MIT") {
    link = "https://mit-license.org/";
  } else if (license === "APACHE 2.0") {
    link = "https://www.apache.org/licenses/LICENSE-2.0";
  } else if (license === "GPL 3.0") {
    link = "https://www.gnu.org/licenses/gpl-3.0.en.html";
  } else if (license === "BSD 3") {
    link = "https://opensource.org/licenses/BSD-3-Clause";
  } else if (license === "None") {
    link = "";
  }
  return link;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license === "None") {
    licenseSection = "";
  } else {
    licenseSection = `License: ${license}`;
  }
  return licenseSection;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

![Github license](${renderLicenseBadge(data.license)})

## Description
  
${data.description}
  
## Table of Contents 
  
* [Installation](#installation)
  
* [Usage](#usage)
  
* [License](#license)
  
* [Contributing](#contributing)
  
* [Tests](#tests)
  
* [Questions](#questions)
  
## Installation
  
To install necessary dependencies, run the following command:
  
\`\`\`
  ${data.installation}
\`\`\`
  
## Usage
  
${data.usage}
  
## License
  
${renderLicenseSection(data.license)} ${renderLicenseLink(data.license)}
    
## Contributing
  
${data.contribution}
  
## Tests
  
To run tests, run the following command:
  
\`\`\`
  ${data.tests}
\`\`\`
  
## Questions
  
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
