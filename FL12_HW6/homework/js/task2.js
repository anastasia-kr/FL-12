const a = parseInt(prompt('Enter value a: ', 0));
const b = parseInt(prompt('Enter value b: ', 0));
const c = parseInt(prompt('Enter value c: ', 0));

if (isNaN(a) || isNaN(b) || isNaN(c) || a === '' || b === '' || c === '') {
    alert('input values should be ONLY numbers');
} else if (a <= 0 || b <= 0 || c <= 0) {
    alert('A triangle must have 3 sides with a positive definite length');
} else if (a + b <= c || b + c <= a || a + c <= b) {
        alert('Triangle doesn’t exist');
} else {
    if (a === b && a === c && b === c) {
        console.log('Equilateral triangle');
    }
    if (a === b && a !== c && b !== c || a !== b && a !== c && b === c || a !== b && a === c && b !== c) {
        console.log('Isosceles triangle');
    }
    if (a !== b && a !== c && b !== c){
        console.log('Scalene triangle');
    }
}