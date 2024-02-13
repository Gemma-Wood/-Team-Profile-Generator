const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the Manager's name?",
        validate(value) {
            if (value) {
                return true;
            } else {
                return "Please provide the Manager's name!";
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the Manager's employee ID?",
        validate(value) {
            if (value) {
                return true;
            } else {
                return "Please provide the Manager's employee ID!";
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the Manager's email address?",
        validate(value) {
            if (value) {
                return true;
            } else {
                return "Please provide the Manager's email address!";
            }
        }
    },
    {
        type: "input",
        name: 'officeNumber',
        message: "What is the Manager's office number?",
        validate(value) {
            if (value) {
                return true;
            } else {
                return "Please provide the Manager's office number!";
            }
        }
    },
];

const options = [{
    type: "list",
    name: "options",
    message: "Who would you like to add next to your team?",
    choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
}];

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the Engineer's name?",
        validate(value) {
            if (value) {
                return true;
            } else {
                return "Please provide the Engineer's name!";
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the Engineer's employee ID?",
        validate(value) {
            if (value) {
                return true;
            } else {
                return "Please provide the Engineer's employee ID!";
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the Engineer's email address?",
        validate(value) {
            if (value) {
                return true;
            } else {
                return "Please provide the Engineer's email address!";
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "What is the Engineer's GitHub username?",
        validate(value) {
            if (value) {
                return true;
            } else {
                return "Please provide the Engineer's GitHub username!";
            }
        }
    },
];

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the Intern's name?",
        validate(value) {
            if (value) {
                return true;
            } else {
                return "Please provide the Intern's name!";
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the Intern's employee ID?",
        validate(value) {
            if (value) {
                return true;
            } else {
                return "Please provide the Intern's employee ID!";
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the Intern's email address?",
        validate(value) {
            if (value) {
                return true;
            } else {
                return "Please provide the Intern's email address!";
            }
        }
    },
    {
        type: "input",
        name: "school",
        message: "In which school is the Intern studying?",
        validate(value) {
            if (value) {
                return true;
            } else {
                return "Please provide the school in which the Intern is studying!";
            }
        }
    },
];

module.exports = { questions, options, engineerQuestions, internQuestions };