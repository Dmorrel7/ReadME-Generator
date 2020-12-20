const fs = require('fs');

// If there is no license, return an empty string
const renderLicenseBadge = license => 

{
  if (license.includes('Apache') )
  {
    return `
      ![Apache](https://img.shields.io/aur/license/android-studio.png)
    `;
  }
  else if (license.includes('GPL'))
  {
    return `
      ![GPL](https://img.shields.io/eclipse-marketplace/l/notepad4e.png)
    `;
  }
  else if (license.includes('MIT'))
  {
    return `
      ![MIT](https://img.shields.io/npm/l/express.png)
    `;
  }
  else
  {
    return ``;
  }
};

const renderLicenseLink = license =>
{
  if (license.includes('Apache'))
  {
    return `
      [Apache](https://www.apache.org/licenses/LICENSE-2.0)
    `;
  }
  else if (license.includes('GPL'))
  {
    return `
      [GPL](https://www.gnu.org/licenses/gpl-3.0.en.html)
    `;
  }
  else if (license.includes('MIT'))
  {
    return `
      [MIT](https://www.opensource.org/licenses/mit-license.php)
    `;
  }
  else
  {
    return ``;
  }
}

function generateMarkdown(data) {
 
  let info =  `
  ${renderLicenseBadge(data.license)}
  # ${data.title} 

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
  This licence is covered under ${renderLicenseLink(data.license)}.
  
  ## Contributing 
  ${data.contribution}

  ## Test
  ${data.test}

  ## Questions
  You can contact to me at my GitHub profile, which is [${data.github}](https://github.com/${data.github}).
  You can also reach out to me by email. ${data.email}
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
