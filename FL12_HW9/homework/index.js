function convert(...args) {
    let newArray = [];
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] === 'number') {
            newArray.push(args[i].toString());
        } else {
            newArray.push(args[i].parseInt());
        }
    
    }
return newArray;
}
convert(2, '2', 3, 4, '44');

function executeforEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
executeforEach([2,3,4], function(el) {
    console.log(el * 2)
});

function mapArray(arr, callback) {
    let newArray = [];
    executeforEach(arr, function(el){
        newArray.push(callback(el.parseInt()));
    });
    return newArray;
}
mapArray([3, '55', 2], function(el) {
    return el + 3;
});

function filterArray(arr, callback) {
    let newArray = [];
    executeforEach(arr, function(el) {
        if(callback(el)){
            newArray.push(+el);
        }
    });
    return newArray;
}
filterArray([4, 5, 6], function(el) {
    return el % 2 === 0;
});

function flipOver(text) {
    let newArray = [];
    for (let i = text.length - 1; i >= 0; i--) {
        newArray.push(text[i]);
    }
    return newArray;
}
flipOver('hello world');

function makeListFromRange(arr) {
    let newArray = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
        newArray.push(i);
    }
    return newArray;
}
makeListFromRange([2, 7]);

function getArrayOfKeys(arr, key) {
    const newArray = [];
    executeforEach(arr, function(el) {
        newArray.push(el[key])
    });
    return newArray;
}

const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];

getArrayOfKeys(actors, 'name');

function substitute(arr) {
    let newArray = [];
    for (let i = 0; i < substitute.length; i++) {
        if (arr[i] < 30) {
            arr[i] === '*';
        }
        newArray.push(arr[i]);
    }
    return newArray;
}

const date = new Date(2020, 0, 1);

function getPastDate(date, daysAgo) {
    date.setDate(date.getDate() - daysAgo);
    return date.getDate();
}
getPastDate(date, 1);

function formatDate(date) {
	let hours = date.getHours();
	let minutes = date.getMinutes();
	const ten = 10;
	hours = hours < ten ? '0' + hours : hours;
	minutes = minutes < ten ? '0' + minutes : minutes;
	const format = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${hours}:${minutes}`;
	return format;
}
console.log(formatDate(new Date('6/15/2018 09:15:00')));
console.log(formatDate(new Date()));