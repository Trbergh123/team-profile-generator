const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, ){
        super(name, id, email);
        this.role = 'Intern';
        this.school = ' ';

    }

    getSchool () {
        return `${this.school}`
    };
}

module.exports = Intern;