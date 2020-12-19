
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


const questionPrompt = () =>
{
    return inquirer.prompt
    ([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => 
            {
                if (nameInput)
                {
                    return true;
                }
                else
                {
                    console.log('Please enter the name of your project!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project. (Required)',
            validate: descriptionInput => 
            {
                if (descriptionInput)
                {
                    return true;
                }
                else
                {
                    console.log('Please enter a description of your project!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'github',
            message: 'What is your github username? (Required)',
            validate: githubInput => 
            {
                if (githubInput)
                {
                    return true;
                }
                else
                {
                    console.log('Please enter your github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => 
            {
                if (emailInput)
                {
                    return true;
                }
                else
                {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },

        {
            type: 'confirm',
            name: 'confirmInstallation',
            message: 'Does your project require instructions for installation?',
            default: true
        },

        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions:',
            when: ({confirmInstallation}) =>
            {
                if (confirmInstallation)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage information.',
            validate: usageInput => 
            {
                if (usageInput)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        },

        {
            type: 'checkbox',
            name: 'license',
            message: 'Which license would you like to use for your project?',
            choices: ['MIT', 'Apache', 'GPL', 'None' ]
        },

        {
            type: 'confirm',
            name: 'confirmTest',
            message: 'Will your project need instructions for testing?',
            default: true
        },
        
        {
            type: 'input',
            name: 'test',
            message: 'Please provide instructions for testing.',
            when: ({confirmTest}) =>
            {
                if (confirmTest)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        },

        {
            type: 'confirm',
            name: 'confirmContributions',
            message: 'Will other users be able to contribute to your project?',
            default: true
        },

        {
            type: 'input',
            name: 'contributions',
            message: 'Please explain guidelines for contribution:',
            when: ({confirmContributions}) =>
            {
                if (confirmContributions)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        },
    ])
};

// // TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

// // TODO: Create a function to initialize app
function init() 
{
    questionPrompt()
    .then(data =>
    {
        return generateMarkdown(data);
    })
    .then(generatedReadMe =>
    {
        return writeFile('README.md', generatedReadMe);
    })
    .catch (err =>
        {
            console,log(err);
        })
};

// // Function call to initialize app
init();
