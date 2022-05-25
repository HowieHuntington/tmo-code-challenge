var app = require('./app.js');


test('Test for hello world', () => {
    var testData = app.helloWorld();
    expect('Hello World').toBe(testData);
});

