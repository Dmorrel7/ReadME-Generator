// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => 
{
  if (license === 'Apache')
  {
    return `
      ![Apache](https://img.shields.io/aur/license/android-studio.png)
    `;
  }
  else if (license === 'GPL')
  {
    return `
      ![GPL](https://img.shields.io/eclipse-marketplace/l/notepad4e.png)
    `;
  }
  else if (license === 'MIT')
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license =>
{
  if (license === 'Apache')
  {
    return `
      [Apache](https://www.apache.org/licenses/LICENSE-2.0)
    `;
  }
  else if (license === 'GPL')
  {
    return `
      [GPL](https://www.gnu.org/licenses/gpl-3.0.en.html)
    `;
  }
  else if (license === 'MIT')
  {
    return `
      [MIT](https://www.opensource.org/licenses/mit-license.php)
    `;
  }
  else
  {
    return ``;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
