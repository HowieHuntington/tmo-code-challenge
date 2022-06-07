var app = require('./app.js');



test('Test for shorten url', () => {
    var urlShortener = new app.UrlShortener();
    var testData = urlShortener.shortenUrl('Hello World!');
    expect('861844d6').toBe(testData);
});

test('Check for duplicates', () => {

});


