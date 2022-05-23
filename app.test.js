var app = require('./app.js');


// test('Test for hello world', () => {
//     var testData = 'HELLO WORLD';
//     expect(app.getString('Hello World')).toBe(testData);
// });

test('Test to verify that data set was ingested correctly', () => {
    var testData = ["aaa", "aab", "aac", "aba", "aca", "baa", "caa"];
    var dictionary = new app.Dictionary(testData);
    expect(dictionary.getDictionary()).toEqual(["aaa", "aab", "aac", "aba", "aca", "baa", "caa"]);
});

test('Check to make sure no false positive', () => {
    var testData = ["aba", "aab", "aac", "aba", "aca", "baa", "caa"];
    var dictionary = new app.Dictionary(testData);
    expect(dictionary.getDictionary()).not.toEqual(["aaa", "aab", "aac", "aba", "aca", "baa", "caa"]);
});