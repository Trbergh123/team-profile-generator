const inquirer = require('inquirer');
const fs = require('fs');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const { start } = require('repl');


class Program {
    constructor() {
        this.members = [];
    }
    startApp() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Team manager\'s name ? (Required) ',
                validate: pnameInput => {
                    if (pnameInput) {
                        return true;
                    } else {
                        console.log('Please enter Team manager\'s name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the Team members Id (Required) ',
                validate: pnameInput => {
                    if (pnameInput) {
                        return true;
                    } else {
                        console.log('Please enter your projects name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the team members email? (Required) ',
                validate: pnameInput => {
                    if (pnameInput) {
                        return true;
                    } else {
                        console.log('Please enter your projects name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNum',
                message: 'What is the Managers office number? (Required) ',
                validate: pnameInput => {
                    if (pnameInput) {
                        return true;
                    } else {
                        console.log('Please enter your projects name!');
                        return false;
                    }
                }
            },

        ])
            .then(({ name, id, email, officeNum }) => {
                this.members.push(new Manager(name, id, email, officeNum));
                console.log(this.members);
                this.startNextPrompt();
            });
            
    }

    startNextPrompt() {
        inquirer.prompt(
            {
                type: 'list',
                name: 'action',
                message: 'Would you like to add a engineer, intern, or end teambuilding',
                choices: ['Add Engineer', 'Add Intern', 'I\'m finished building my team!']
            })
            .then(function({ action }) {
                if (action === 'Add Engineer') 
                { Program.addEngineer(); }
            })
            .then(function({action}){
                if (action === 'Add Intern'){
                    this.addIntern();
                }
            })
            .then(function({action}) {
                if (action === 'I\'m finished building my team!'){
                    this.buildHtml();
                }
            })
            }
    addEngineer(){

            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Engineer\'s name ? (Required) ',
                    validate: pnameInput => {
                        if (pnameInput) {
                            return true;
                        } else {
                            console.log('Please enter Team manager\'s name!');
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
                            console.log('Please enter your projects name!');
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
                            console.log('Please enter your projects name!');
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
                            console.log('Please enter your projects name!');
                            return false;
                        }
                    }
                },
    
            ])
                .then(({ name, id, email, gitHub}) => {
                    this.members.push(new Engineer(name, id, email,gitHub));
                    console.log(this.members);
                    console.log(this.startApp());
                });
        }

        buildHtml(){
            console.log(this.members);
        }
    
};

new Program().startApp();
