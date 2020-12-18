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
            message: 'What does a user need to know for installation?',
            name: 'installation',
        },

        {
            type: 'input',
            message: 'What license does this include?',
            name: 'license',
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
            message: 'Please enter your email address',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Please enter your github username',
            name: 'github',
        },


    ])

    .then((data) => 
    fs.writeFile('GeneratedREADME.md', (`
    \n # Project Title: ${data.name}
    
    \n ## Table of Contents:
    * [Description](##Description)
    * [License](##License)
    * [User Need to Know](##Users)
    * [Contribute](##Contribute)
    * [Partners](#Partners)
    * [Contact](#Contact)

    \n ## Description: 
    ${data.description} 

    \n ## License:
    ${data.license}

    \n ## Motivation: 
    ${data.motivation}

    \n ## Installation
    ${data.installation}
   
    \n ## Users: 
    ${data.needtoknow}
    
    \n ## Contribute: 
    ${data.contribute}
   
    \n ## Partners: 
    ${data.partners} 
   
    \n ## Contact:
    ${data.email}
    ${data.github}
    `),
    
    (err) =>
    err ? console.error(err) : console.log('Success!')
    ));

