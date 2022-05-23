


function main() {
    var dataSet = ["aaa", "aab", "aac", "aba", "aca", "baa", "caa"];
    var dictionary = new Dictionary(dataSet);
    query('a', 5);
}

function query(userInput, limit) {
    var dataSet = ["aaa", "aab", "aac", "aba", "aca", "baa", "caa"];
    // dataSet.filter(value => {
    //     set flag
    // });
    var returnedArray = [];
    var stringNumberValues = {
        "aaa": 0, 
        "aab": 0, 
        "aac": 0, 
        "aba": 0, 
        "aca": 0, 
        "baa": 0, 
        "caa": 0
    }

    for(let i = 0; i < dataSet.length; i++ ) {
        let x = 0;
        for(let k = 0; k < userInput.length && dataSet[i].length; k++) {
            if (userInput[k] === dataSet[i].charAt(k)) {
                x++;
            }
            // console.log(dataSet[i]);
            // console.log(dataSet[i].indexOf(k));
        }
        stringNumberValues[dataSet[i]] = x;
    }
}

class Dictionary {
    dictionary;
    constructor(dictionary) {
        this.dictionary = dictionary;
    }

    setDictionary(dictionary) {
        this.dictionary = dictionary;
    }

    getDictionary() {
        return this.dictionary;
    }
}

main();

module.exports = {Dictionary};