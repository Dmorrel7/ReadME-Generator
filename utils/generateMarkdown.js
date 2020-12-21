const fs = require('fs');

// If there is no license, return an empty string
function renderLicenseBadge(license) {

  let licenseBadge 
  
    if(license.includes('Apache') ) {
      licenseBadge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    } 
    else if(license.includes('GPL')) {
      licenseBadge = `![GPL](https://img.shields.io/eclipse-marketplace/l/notepad4e.png)`
    } 
    else if (license.includes('MIT')){
      licenseBadge = `![MIT](https://img.shields.io/badge/license-MIT-blue)`
    }
    else
    {
        return ``;
    }

  return licenseBadge;
}

function renderLicenseLink(license) {
  let licenseLink 

    if(license.includes('Apache')) {
      licenseLink = `(https://opensource.org/licenses/Apache-2.0)`
    } 
    else if (license.includes('GPL')) {
      licenseLink =  `[GPL](https://www.gnu.org/licenses/gpl-3.0.en.html)`
    }
    else if (license.includes('MIT')){
      licenseLink = `[MIT](https://www.opensource.org/licenses/mit-license.php)`
    }

    else
    {
        return ``;
    }

    return licenseLink
}
function generateMarkdown(data) {
 
  let info =  `
  # ${data.title} 
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#Contributing)
  * [Test](#test)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  This project is covered under the license of ${renderLicenseLink(data.license)}.
  
  ## Contributing 
  ${data.contribution}

  ## Test
  ${data.test}

  ## Questions
  You can contact to me at my GitHub profile, which is [${data.github}](https://github.com/${data.github}).
  You can also reach out to me by email ${data.email}
  `;

  writeFile('./dist/README.md', info);
}


function writeFile(fileName, data) 
{
  return new Promise((resolve, reject) => 
  {
      fs.writeFile(fileName, data, err => 
      {
          if (err) 
          {
              reject(err);
              return;
          }
          resolve
          ({
              ok: true,
              message: 'File Created'
          })
      })
  })
}

module.exports = generateMarkdown;
