// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
{ 
    type:"input",
    Message:"What is the title of this project?",
    Name:"Title",
},

{ 
    type:"input",
    Message:"Please describe the project",
    Name:"Description",
    },

{ 
    type:"input",
    Message:"How do I install this project?",
    Name:"Installation",
    },
{ 
    type:"input",
    Message:"How do I use this project?",
    Name:"Usage",
    },
{ 
    type:"List",
    Message:"Select a License:",
    Name:"License",
    Choices: [
        "MIT",
        "GVL-GPL 3.0",
        "APACHE 2.0",
        "BSD 3",
        "None"
    ]
    },
{ 
    type:"input",
    Message:"Who contributed to this project?",
    Name:"Contributors",
    },
{ 
    type:"input",
    Message:"How do I test this project?",
    Name:"Test",
    },
{ 
    type:"input",
    Message:"Please provide contact info additional questions:",
    Name:"Questions",
    },
{ 
    type:"input",
    Message:"What is your github username?",
    Name:"Username",
    },
 { 
    type:"input",
    Message:"What is your email address?",
    Name:"Email",
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
writeToFile(fileName, data, err =>{
    if(err) {
        throw err;
    }
});

}

// TODO: Create a function to initialize app
function init() {
    prompt(questions).then(answers=> {
        console.log(answers);
    
    writeToFile("README.md", response);
    })
}

// Function call to initialize app
init();
