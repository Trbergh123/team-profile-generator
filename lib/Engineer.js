const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(gitHub = '' ){
        super(name, id, email);
        this.role = 'Engineer';
        this.gitHub = gitHub;

    }

    getGithub () {
        return `${this.gitHub}`
    };
}

module.exports = Engineer;