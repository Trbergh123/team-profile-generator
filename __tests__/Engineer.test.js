const Engineer = require('../lib/Engineer');


test ('creates an engineer object', () => {
    const engineer = new Engineer('Todd');

    expect(engineer.name).toBe('Todd');
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.role).toBe('Engineer')
    expect(engineer.gitHub).toEqual(expect.any(String));
    
});

test ('get name of engineer', () => {
    const engineer = new Engineer('Todd');

    expect(engineer.getName()).toEqual(expect.any(String))

});

test ('get id of engineer', () => {
    const engineer = new Engineer('Todd');

    expect(engineer.getId()).toEqual(expect.any(String))

});

test ('get email of engineer', () => {
    const engineer = new Engineer('Todd');

    expect(engineer.getEmail()).toEqual(expect.any(String))

});

test ('get role', () => {
    const engineer = new Engineer('Todd');

    expect(engineer.getRole()).toBe('Engineer');

});

test ('get github link', () => {
    const engineer = new Engineer('Todd');

    expect(engineer.getGithub()).toEqual(expect.any(String))
});


