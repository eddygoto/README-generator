// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Write a short description of your project.",
        name: "description",
    },
    {
        type: "input",
        message: "What command should be used to install your project?",
        name: "installation",
    },
    {
        type: "input",
        message: "Write a short description of how to use your project.",
        name: "usage",
    },
    {
        type: "input",
        message: "Please list any other contributors to this project.",
        name: "contribution",
    },
    {
        type: "input",
        message: "What command should be used to run tests of your project?",
        name: "tests",
    },
    {
        type: "list",
        message: "What license is your project using?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        name: "license",
    },
];


// TODO: Create a function to write README file
// export module from generateMarkdown
function writeToFile(data) {
    return fs.writeFile("./generatedREADME.md", data, err => {
        if (err) {
            console.log(err);
        } else {
        console.log("Your README is being generated...");
    }});
};

// TODO: Create a function to initialize app
// .then function to call generateMarkdown
function init() {
    inquirer.prompt(questions).then((data) => {
        const content = generateMarkdown(data);
        writeToFile(content);
    })};

// Function call to initialize app
init();
