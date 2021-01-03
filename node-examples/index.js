// Importing a node module
var rect = require('./rectangle');

function solveRect(l, b) {
    rect(l, b, (err, rectangle) => {
        if (err) {
            console.log('ERROR: ' + err.message);
        } else {
            console.log(
                'Area: ' +
                    rectangle.area(l, b) +
                    '\n' +
                    'Perimeter: ' +
                    rectangle.perimeter(l, b)
            );
        }
    });
    console.log('This statement is called after rect()');
}

solveRect(-2, 4);
