const Manager = require('../lib/Manager');


test ('creates an manager object', () => {
    const manager = new Manager('Todd');

    expect(manager.name).toBe('Todd');
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.role).toBe('Manager')
    expect(manager.officeNum).toEqual(expect.any(String));
    
});

test ('get name of manager', () => {
    const manager = new Manager('Todd');

    expect(manager.getName()).toEqual(expect.any(String))

});

test ('get id of manager', () => {
    const manager = new Manager('Todd');

    expect(manager.getId()).toEqual(expect.any(String))

});

test ('get email of manager', () => {
    const manager = new Manager('Todd');

    expect(manager.getEmail()).toEqual(expect.any(String))

});

test ('get role', () => {
    const manager = new Manager('Todd');

    expect(manager.getRole()).toBe('Manager');

});


