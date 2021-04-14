var app = require('./app.js');


test('Test for hello world', () => {
    var testData = 'HELLO WORLD';
    expect(app.getString('Hello World')).toBe(testData);
});