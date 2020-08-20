const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNum = ''){
        super(officeNum);
        this.role = 'Manager';
        this.officeNum = officeNum;

    }
}

module.exports = Manager;