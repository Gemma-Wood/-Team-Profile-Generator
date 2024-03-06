const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Create an empty array to store the team members after they are created
let teamMembers = [];

// Create an empty array to store the member IDs after they are created
let ids = []

// Function to create manager. 
function createManager() {
    // Ask for a name, id, email and office number for the manager
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the team manager\'s name?',
            validate: (answer) => {
                if (answer !== '') {
                    return true;
                } else {
                    console.log('Please enter the team manager\'s name');
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'managerId',
            message: 'Enter the team manager\'s ID.',
            validate: (answer) => {
                if (answer !== '') {
                    return true;
                } else {
                    console.log('Please enter the team manager\'s name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the team manager\'s email address?',
            validate: (answer) => {
                if (answer !== '') {
                    return true;
                } else {
                    console.log('Please enter the team manager\'s name');
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: 'What is the team manager\'s office number?',
            validate: (answer) => {
                if (answer !== '') {
                    return true;
                } else {
                    console.log('Please enter the team manager\'s name');
                    return false;
                }
            }
        }
    ])
        .then((managerAnswers) => {
            // Then store the answers into a new Manager object
            const manager = new Manager(managerAnswers.managerName, managerAnswers.managerId, managerAnswers.managerEmail, managerAnswers.officeNumber);
            //push the manager into the team members array
            teamMembers.push(manager)
            next()
        })
    
}

// Function to create an engineer.
const createEngineer = () => {

    // Asks for a name, id, email, and github
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the team engineers\'s name?',
            validate: (answer) => {
                if (answer !== '') {
                    return true;
                } else {
                    console.log('Please enter the team engineers\'s name');
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'engineerId',
            message: 'Enter the team engineers\'s ID.',
            validate: (answer) => {
                if (answer !== '') {
                    return true;
                } else {
                    console.log('Please enter the team engineers\'s name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the team engineers\'s email address?',
            validate: (answer) => {
                if (answer !== '') {
                    return true;
                } else {
                    console.log('Please enter the team engineers\'s name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is the team engineers\'s GitHub username?',
            validate: (answer) => {
                if (answer !== '') {
                    return true;
                } else {
                    console.log('Please enter the team engineers\'s Github');
                    return false;
                }
            }
        }
    ])
        .then((engineerAnswers) => {
            // Then store the answers into a new engineer object
            const engineer = new Engineer(engineerAnswers.engineerName, engineerAnswers.engineerId, engineerAnswers.engineerEmail, engineerAnswers.gitHub);
            //engineer.getGithub()
            //push the manager into the team members array
            teamMembers.push(engineer)
            next()
        })
    
}

// Function to create an intern
// Asks for a name, id, email, and school
const createIntern = () => {

    // Asks for a name, id, email, and github
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the team interns\'s name?',
            validate: (answer) => {
                if (answer !== '') {
                    return true;
                } else {
                    console.log('Please enter the team interns\'s name');
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'internId',
            message: 'Enter the team interns\'s ID.',
            validate: (answer) => {
                if (answer !== '') {
                    return true;
                } else {
                    console.log('Please enter the team interns\'s name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the team interns\'s email address?',
            validate: (answer) => {
                if (answer !== '') {
                    return true;
                } else {
                    console.log('Please enter the team interns\'s name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the team interns\'s school?',
            validate: (answer) => {
                if (answer !== '') {
                    return true;
                } else {
                    console.log('Please enter the team interns\'s name');
                    return false;
                }
            }
        }
    ])
        .then((internAnswers) => {
            // Then store the answers into a new engineer object
            const intern = new Intern(internAnswers.internName, internAnswers.internId, internAnswers.internEmail, internAnswers.school);
            //push the manager into the team members array
            teamMembers.push(intern)
            next()
        })
    
}

function next() {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do next?',
            name: 'next',
            choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
        }
    ]).then((nextAnswer) => {
        switch(nextAnswer.next) {
            case "Add an engineer":
                createEngineer();
                break;
            case "Add an intern":
                createIntern();
                break;
            case "Finish building the team":
                createTeam(teamMembers);
                
        }
    })
}
function createTeam(teamMembers){
    console.log(teamMembers)
    if (!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
}
// Then create a conditional to check which user is picked.
// Have an else condition so that if they choose to not make any more members, the file gets written.

function driver() {
    createManager()
}

driver()