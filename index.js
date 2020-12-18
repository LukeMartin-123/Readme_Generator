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
            name: 'describtion',
        },
        {
            type: 'input',
            message: 'What was the motivation behind creating this repo?',
            name: 'motivation',
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
    fs.writeFile('README.md', (`${data.name}
    ${data.describtion} 
    ${data.motivation} 
    ${data.needtoknow}
    ${data.contribute}
    ${data.partners} 
    ${data.contact} 
    `),
    
    (err) =>
    err ? console.error(err) : console.log('Success!')
    ));

