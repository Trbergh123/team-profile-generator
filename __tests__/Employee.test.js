const Employee = require('../lib/Employee');


test ('creates an employee object', () => {
    const employee = new Employee('Todd');

    expect(employee.name).toBe('Todd');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toBe('Employee')
    
});

test ('get name of employee', () => {
    const employee = new Employee('Todd');

    expect(employee.getName()).toEqual(expect.any(String))

});

test ('get id of employee', () => {
    const employee = new Employee('Todd');

    expect(employee.getId()).toEqual(expect.any(String))

});

test ('get email of employee', () => {
    const employee = new Employee('Todd');

    expect(employee.getEmail()).toEqual(expect.any(String))

});

test ('get email of employee', () => {
    const employee = new Employee('Todd');

    expect(employee.getRole()).toBe('Employee');

});
