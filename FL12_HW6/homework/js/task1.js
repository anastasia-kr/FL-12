const a = Number(prompt('Enter value a: ', 0));
const b = Number(prompt('Enter value b: ', 0));
const c = Number(prompt('Enter value c: ', 0));
let d;
let x;
let x1;
let x2;

if (a === 0 || isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Invalid input data');
} else {
    d = b*b - 4*a*c;
    if (d < 0) {
        console.log('no solution');
    } else if (d === 0) {
        x = Math.round(-b / 2*a);
        console.log('x = ', x);
    } else if (d > 0) {
        x1 = Math.round((-b + Math.sqrt(d)) / 2*a);
        x2 = Math.round((-b - Math.sqrt(d)) / 2*a);
        console.log('x1 = ', x1, ' and x2 = ', x2);
    }
}