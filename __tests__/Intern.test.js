const Intern = require('../lib/Intern');


test ('creates an intern object', () => {
    const intern = new Intern('Todd');

    expect(intern.name).toBe('Todd');
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.role).toBe('Intern')
    expect(intern.school).toEqual(expect.any(String));
    
});

test ('get name of intern', () => {
    const intern = new Intern('Todd');

    expect(intern.getName()).toEqual(expect.any(String))

});

test ('get id of intern', () => {
    const intern = new Intern('Todd');

    expect(intern.getId()).toEqual(expect.any(String))

});

test ('get email of intern', () => {
    const intern = new Intern('Todd');

    expect(intern.getEmail()).toEqual(expect.any(String))

});

test ('get role', () => {
    const intern = new Intern('Todd');

    expect(intern.getRole()).toBe('Intern');

});

test ('get school of intern', () => {
    const intern = new Intern('Todd');

    expect(intern.getSchool()).toEqual(expect.any(String))

});

