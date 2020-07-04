const fs = require("fs");
const inquirer = require('inquirer');
const util = require('util');
const { RSA_PKCS1_OAEP_PADDING } = require("constants");

const generateMarkdown = require("./utils/generateMarkdown.js");

// const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
       type: "input",
       name: "title",
       message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project"
     },
     {
        type: "input",
        name: "credits",
        message: "Do you have collaborators you would like to credit"
     },
     {
        type: "input",
        name: "installation",
        message: "What are the installation instructions for your application?"
     },
     {
        type: "input",
        name: "usage",
        message: "What is the use of your application?"
     },
     {
        type: "input",
        name: "contributing",
        message: "What are the contributing guidlines for your application?"
     },
     {
        type: "input",
        name: "tests",
        message: "What are your test commands for this application?"
     },
     {
        type: "input",
        name: "github",
        message: "Your github url for questions:"
     },
     {
        type: "input",
        name: "email",
        message: "What is your email address?"
     },
     {
        type: "list",
        name: "license",
        message: "What is the license for your application?",
        choices: [
            "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
            "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
            "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
        ]
     },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("readMe.md", data, (err)=>{
        if(err){
        console.log(err)
        }
    });
    console.log("file written");
}

// function to initialize program
async function init() {
    try{
        let answers = await inquirer.prompt(questions);
        console.log(answers);
        let markdown = generateMarkdown(answers);
        let writeFile = writeToFile("readMe.md", markdown);
    }
    catch(err){
        throw err
    }
}

// function call to initialize program
init();
