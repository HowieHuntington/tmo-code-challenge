
function main() {
    console.log(getString('hello world'));
}

function getString(str) {
    return str.toUpperCase();
}

main();

module.exports = {getString};