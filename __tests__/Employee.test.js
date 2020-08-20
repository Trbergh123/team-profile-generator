const Employee = require('../lib/Employee');


test ('creates an employee object', () => {
    const employee = new Employee('Todd');

    expect(employee.name).toBe('Todd');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    
});