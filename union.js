"use strict";
// Сужение типов
function logId(id) {
    if (typeof id === 'string') {
        console.log(id); // string
    }
    else if (typeof id === 'number') {
        console.log(id); // number
    }
    else {
        console.log(id); // boolean
    }
}
// Сужение типа массива
function logError(err) {
    if (Array.isArray(err)) {
        console.error(err); // array
    }
    else {
        console.error(err); // string
    }
}
// Сужение типа объекта
function logObject(obj) {
    if ('a2' in obj) {
        console.log(obj.a2); // number
    }
    else {
        console.log(obj.b2); // string
    }
}
function logMultiplyIds(a, b) {
    if (a === b) {
        console.log(a); // string
    }
    else {
        console.log(a); // string | number
    }
}
let z = 1; // type 1 !!! as constant
// z = 2 // Type '2' is not assignable to type '1'.
