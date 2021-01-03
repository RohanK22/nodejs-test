// Importing a node module
var rect = require('./rectangle');

function solveRect(l, b) {
    if (l < 0 || b < 0) {
        console.log('Wrong dimensions!');
    } else {
        console.log(
            'Area: ' +
                rect.area(l, b) +
                '\n' +
                'Perimeter: ' +
                rect.perimeter(l, b)
        );
    }
}

solveRect(2, 4);
