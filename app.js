const readline = require('readline-sync');
const sha2_512 = require('simple-js-sha2-512')

function main() {
   var urlShortener = new UrlShortener();
   urlShortener.shortenUrl('Hello World!');
   urlShortener.shortenUrl('Hello World!');
}
// function helloWorld(string) {
//     var hash = sha2_512(string).substring(0, 8);
    
//     return 
// }

class UrlShortener {
    storedHashes;

    constructor() {
        this.storedHashes = {};
    }

    shortenUrl(string) {
        if (!this.storedHashes[string]) {
            this.storedHashes[string] = (sha2_512(string).substring(0, 8));
            return this.storedHashes[string];
        } else {
            return this.storedHashes[string];
        }
    }

}

main()

module.exports.UrlShortener = UrlShortener;