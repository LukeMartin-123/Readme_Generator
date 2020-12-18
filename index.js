const inquirer = require("inquirer")
const fs = require("fs")

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of project?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Please describe your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What was the motivation behind creating this repo?',
            name: 'motivation',
        },

        {
            type: 'input',
            message: 'What license does this include?',
            name: 'License',
        },

        {
            type: 'input',
            message: 'What does the user need to know about the repo?',
            name: 'needtoknow',
        },
        {
            type: 'input',
            message: 'What does the user need to know about contributing to the rep?',
            name: 'contribute',
        },
        {
            type: 'input',
            message: 'Who were the contributers that created the repo?',
            name: 'partners',
        },
        {
            type: 'input',
            message: 'Please enter your contact information',
            name: 'contact',
        },


    ])

    .then((data) => 
    fs.writeFile('GeneratedREADME.md', (`
    \n # Project Title: 
    ${data.name}
    \n ## Table of Contents:
   
    \n ## Description: 
    ${data.description} 

    \n ## What license is used?:
    ${data.license}

    \n ## Motivation: 
    ${data.motivation} 
   
    \n ## What do users need to know?: 
    ${data.needtoknow}
    
    \n ## What do contributors need to know?: 
    ${data.contribute}
   
    \n ## Contributors: 
    ${data.partners} 
   
    \n ## Contact Info: 
    ${data.contact} 
    `),
    
    (err) =>
    err ? console.error(err) : console.log('Success!')
    ));

