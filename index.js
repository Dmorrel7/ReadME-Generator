// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// // TODO: Create an array of questions for user input
// const questions = [];

const questionPrompt = () =>
{
    return inquirer.prompt
    ([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
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
            message: 'Provide a description of your project.',
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
            name: 'description',
            message: 'Provide a description of your project.',
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

        
    ])
};

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
function init() 
{
    questionPrompt();
}

// // Function call to initialize app
init();
