var app = require('./app.js');


test('Test for hello world', () => {
    // var testData = 'HELLO WORLD';
    // expect(app.getString('Hello World')).toBe(testData);
    var dog = new app.Dog('woof');
    var test = 'woof';
    expect(dog.bark()).toBe(test);

});
