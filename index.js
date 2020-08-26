const inquirer = require('inquirer');
const fs = require('fs');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const { start } = require('repl');

const member = [];



function startApp() {
    startHtml();
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team manager\'s name ? (Required) ',
            validate: pnameInput => {
                if (pnameInput) {
                    return true;
                } else {
                    console.log('Please enter team manager\'s name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team manager\'s id (Required) ',
            validate: pnameInput => {
                if (pnameInput) {
                    return true;
                } else {
                    console.log('Please enter team manager\'s id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team manager\'s email? (Required) ',
            validate: pnameInput => {
                if (pnameInput) {
                    return true;
                } else {
                    console.log('Please enter team manager\'s email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'What is the team manager\'s office number? (Required) ',
            validate: pnameInput => {
                if (pnameInput) {
                    return true;
                } else {
                    console.log('Please enter team manager\'s office number!');
                    return false;
                }
            }
        },

    ])
        .then(function({ name, id, email, officeNum }) {
            newMember = new Manager(name, id, email, officeNum);
            member.push(newMember);
            addMember(newMember);
            startNextPrompt();
        });

}

function startNextPrompt() {
    inquirer.prompt(
        {
            type: 'list',
            name: 'action',
            message: 'Would you like to add a engineer, intern, or end teambuilding?',
            choices: ['Add Engineer', 'Add Intern', 'I\'m finished building my team!']
        })
        .then(function ({ action }) {
            if (action === 'Add Engineer') {
                addEngineer();
            } else if (action === 'Add Intern') {
                addIntern();
            } else if (action === 'I\'m finished building my team!') {
                finishHtml();
            }

        });
}

function addEngineer() {

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Engineer\'s name ? (Required) ',
            validate: pnameInput => {
                if (pnameInput) {
                    return true;
                } else {
                    console.log('Please enter the engineer\'s name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the engineer\'s Id (Required) ',
            validate: pnameInput => {
                if (pnameInput) {
                    return true;
                } else {
                    console.log('Please enter the engineer\'s id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineer\'s email? (Required) ',
            validate: pnameInput => {
                if (pnameInput) {
                    return true;
                } else {
                    console.log('Please enter the engineer\'s email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is the engineers github link? (Required) ',
            validate: pnameInput => {
                if (pnameInput) {
                    return true;
                } else {
                    console.log('Please enter the engineer\'s github link!');
                    return false;
                }
            }
        },

    ])
        .then(function({ name, id, email, gitHub }) {
            newMember = new Engineer(name, id, email, gitHub);
            member.push(newMember);
            addMember(newMember);
            startNextPrompt();

        });
};

function addIntern() {

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Intern\'s name ? (Required) ',
            validate: pnameInput => {
                if (pnameInput) {
                    return true;
                } else {
                    console.log('Please enter the intern\'s name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the intern\'s Id (Required) ',
            validate: pnameInput => {
                if (pnameInput) {
                    return true;
                } else {
                    console.log('Please enter the intern\'s id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the itern\'s email? (Required) ',
            validate: pnameInput => {
                if (pnameInput) {
                    return true;
                } else {
                    console.log('Please enter the intern\'s email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the intern\s school? (Required) ',
            validate: pnameInput => {
                if (pnameInput) {
                    return true;
                } else {
                    console.log('Please enter the intern\'s school!');
                    return false;
                }
            }
        },

    ])
        .then(function({ name, id, email, school }) {
            newMember = new Intern(name, id, email, school);
            member.push(newMember);
            addMember(newMember);
            startNextPrompt();



        });
};



function startHtml() {
    const html = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                <title>Team Profile</title>
            </head>
            <body>
                <nav class="navbar navbar-dark bg-dark mb-5">
                    <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
                </nav>
                <div class="container">
                    <div class="row">`;
    fs.writeFile("./index.html", html, function (err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}

function addMember(member) {
    return new Promise(function (resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = member.gitHub;
            data = `<div class="col-6">
                    <div class="card mx-auto mb-3" style="width: 18rem">
                    <h5 class="card-header">${name}<br /><br />Engineer</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email Address: ${email}</li>
                        <li class="list-group-item">GitHub: ${gitHub}</li>
                    </ul>
                    </div>
                </div>`;
        } else if (role === "Intern") {
            const school = member.getSchool();
            data = `<div class="col-6">
                    <div class="card mx-auto mb-3" style="width: 18rem">
                    <h5 class="card-header">${name}<br /><br />Intern</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email Address: ${email}</li>
                        <li class="list-group-item">School: ${school}</li>
                    </ul>
                    </div>
                </div>`;
        } else {
            const officeNum = member.officeNum;
            data = `<div class="col-6">
                    <div class="card mx-auto mb-3" style="width: 18rem">
                    <h5 class="card-header">${name}<br /><br />Manager</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email Address: ${email}</li>
                        <li class="list-group-item">Office Number: ${officeNum}</li>
                    </ul>
                    </div>
                </div>`
        }
        console.log("adding team member");
        fs.appendFile("./index.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });






}

function finishHtml() {
    const html = ` </div>
            </div>
            
        </body>
        </html>`;

    fs.appendFile("./index.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}


startApp();
