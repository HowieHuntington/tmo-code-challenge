var axios = require('axios');
// https://www.npmjs.com/package/axios
// https://www.geeksforgeeks.org/how-to-make-javascript-wait-for-a-api-request-to-return/

function get(path) {
    return new Promise(function (resolve, reject) {
        axios.get(path).then(
            (response) => {
                var result = response.data;
                console.log('Processing Request');
                console.log(result);
                resolve(result);
            },
                (error) => {
                reject(error);
            }
        );
    });
}

module.exports = {get}